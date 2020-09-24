/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, forwardRef, useEffect } from "react";
import classnames from "classnames";
import { Modal, Tabs, ActivityIndicator, Icon } from "../index";
import { AreaPickerProps } from "./PropsType";
import { Noop } from "../../typings/types";

import "./style/index.less";

const stepMap = new Map([
  [-1, "省"],
  [0, "市"],
  [1, "区"],
  [2, "街道"],
  [3, "社区"],
  [4, "网格"],
]);

// Todo 回填

// 省市区街道

const AreaPicker: React.FunctionComponent<AreaPickerProps> = forwardRef(
  (
    {
      visible = false,
      onModalClose,
      onChooseHandler,
      limit = 5,
      organizationListChild,
      organizationGetRoot,
    },
    _ref
  ) => {
    const [tabs, setTabs] = useState<any[]>([]);
    const [panes, setPanes] = useState<any[]>([]);
    const [allPanes, setAllPanes] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(-1);

    const formatTitle = (val: string, len: number): string => {
      if (val.length > len) {
        return `${val.slice(0, len)}...`;
      }
      return val;
    };

    const _organizationListChild = async (params: Noop) => {
      try {
        setLoading(true);
        const { data: field } = await organizationListChild(params);
        const _field = field.map((item: Noop) => ({
          ...item,
          title: item.orgName,
        }));
        const _tabs: any[] = tabs.slice();
        const _allPanes: any = allPanes.slice();
        if (step > -1) {
          const title = formatTitle(
            panes.find((item: any) => item.checked).title,
            4
          );
          _tabs.splice(step, 1, { title });
        }
        _tabs.push({ title: `选择${stepMap.get(step)}` });
        _allPanes.push(_field);
        setStep(step + 1);
        setTabs(_tabs);
        setAllPanes(_allPanes);
        setPanes(_field);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    const initData = async () => {
      try {
        const {
          data: { id },
        } = await organizationGetRoot({});
        _organizationListChild({ id, "orgType[]": 90180001 });
      } catch (error) {}
    };

    useEffect(() => {
      initData();
    }, []);
    const onClose = () => {
      if (onModalClose) {
        onModalClose();
      }
    };
    const choosePlace = (tab: any) => {
      const _panes: any[] = panes.slice();
      _panes.forEach((item: any) => {
        if (item.orgName === tab.title) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      if (!tab.parent || step >= limit) {
        const _tabs = tabs.slice();
        _tabs[_tabs.length - 1].title = formatTitle(tab.orgName, 4);
        setTabs(_tabs);
        setPanes(_panes);
        return;
      }
      _organizationListChild({ id: tab.id, "orgType[]": 90180001 });
    };

    const onTabClickHandler = (_tab: any, index: number) => {
      const _allPanes = allPanes.slice();
      setStep(index);
      setTabs(tabs.slice(0, index + 1));
      setPanes(_allPanes[index]);
      setAllPanes(_allPanes.slice(0, index + 1 || 1));
    };

    const confirm = () => {
      if (onChooseHandler) {
        onChooseHandler(allPanes);
        onClose();
      }
    };

    const renderContent = (_tab: any, key: any) => (
      <div className={classnames("content")} key={key}>
        <div className={classnames("content-title")}>
          {stepMap.get(step - 1)}
        </div>
        {loading ? (
          <ActivityIndicator text="Loading..." />
        ) : (
          panes &&
          panes.length > 0 &&
          panes.map((item: any) => (
            <div
              key={item.id}
              className={classnames("content-item", { active: item.checked })}
              onClick={() => choosePlace(item)}
            >
              <span>{item.orgName}</span>
              {item.checked && <Icon type="check" size="xs" />}
            </div>
          ))
        )}
      </div>
    );

    return (
      <span className={classnames("ppx-area-picker")}>
        <Modal
          popup
          visible={visible}
          onClose={onClose}
          animationType="slide-up"
          className="ppx-area-modal"
        >
          <div className={classnames("modal-title")}>
            <span className={classnames("tool")} onClick={onClose}>
              取消
            </span>
            <span className={classnames("name")}>
              选择{stepMap.get(step - 1)}
            </span>
            <span className={classnames("tool")} onClick={confirm}>
              确认
            </span>
          </div>
          <Tabs
            tabs={tabs}
            renderTabBar={(props) => (
              <Tabs.DefaultTabBar {...props} activeTab={step} />
            )}
            onTabClick={onTabClickHandler}
          >
            {renderContent}
          </Tabs>
        </Modal>
      </span>
    );
  }
);

export default AreaPicker;
