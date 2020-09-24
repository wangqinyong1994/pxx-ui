import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useMemo,
} from "react";
import classnames from "classnames";
import { Modal, Icon, FormField } from "../index";
import { Noop } from "../../typings/types";
import { MultyModalFormItemProps } from "./PropsType";

import "./style/index.less";

// TODO 1. 多选至少选择几项 2. 反选情况

const MultyModalFormItem = forwardRef(
  (
    {
      label,
      required = false,
      tips = "",
      sign = ";",
      form,
      confirmHandler,
      initPanes = [],
      initPanesFn,
      itemName,
      rules,
      fieldOptions,
    }: MultyModalFormItemProps,
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const [panes, setPanes] = useState(JSON.parse(JSON.stringify(initPanes)));
    const [savedPanes, setSavedPanes] = useState(
      JSON.parse(JSON.stringify(initPanes))
    );
    useImperativeHandle(ref, () => ({
      panes: savedPanes.filter((item: Noop) => item.checked),
    }));

    const { setFieldsValue, getFieldValue } = form;
    const getInitValue = async () => {
      const _res = await initPanes;
      const res = initPanesFn ? initPanesFn(_res) : _res;
      setPanes(JSON.parse(JSON.stringify(res)));
      setSavedPanes(JSON.parse(JSON.stringify(res)));
    };

    useEffect(() => {
      getInitValue();
    }, [initPanes]);
    const choosePlace = (item: Noop) => {
      const _panes = panes.slice().map((paneItem: Noop) => {
        if (paneItem.id === item.id) {
          paneItem.checked = !item.checked;
        }
        return paneItem;
      });
      setPanes(_panes);
    };

    const confirm = () => {
      setFieldsValue({
        [itemName]: panes,
      });
      setSavedPanes(JSON.parse(JSON.stringify(panes)));
      setVisible(false);
      if (confirmHandler) {
        confirmHandler(panes.filter((item: Noop) => item.checked));
      }
    };

    const cancel = () => {
      setVisible(false);
      setPanes(JSON.parse(JSON.stringify(savedPanes)));
    };

    const renderMultyText = useMemo(() => {
      let arr =
        panes && panes.length && panes.filter((item: Noop) => item.checked);
      if (getFieldValue(itemName) && getFieldValue(itemName).length) {
        arr = getFieldValue(itemName).filter((item: Noop) => item.checked);
      }
      let ret = "";
      if (arr && arr.length) {
        arr.forEach((item: Noop) => {
          ret += `${item.name}${sign}`;
        });
        return ret.trimEnd().slice(0, -1);
      }
      return tips || `请选择${label}`;
    }, [panes, getFieldValue(itemName), tips]);
    return (
      <div>
        <FormField
          type="modal"
          label={label}
          required={required}
          requiredTips={`请选择${label}`}
          form={form}
          itemName={itemName}
          controlClassName="ppx-multy-formfield"
          rules={rules}
          fieldOptions={fieldOptions}
          content={
            <div
              className={classnames("text-dom", {
                active: renderMultyText.indexOf("请选择") > -1,
              })}
              onClick={() => {
                if (getFieldValue(itemName)) {
                  setPanes(JSON.parse(JSON.stringify(getFieldValue(itemName))));
                  setSavedPanes(
                    JSON.parse(JSON.stringify(getFieldValue(itemName)))
                  );
                }
                setVisible(true);
              }}
            >
              {renderMultyText}
            </div>
          }
        />
        <Modal
          wrapClassName={classnames("ppx-multy-modal")}
          popup
          visible={visible}
          onClose={cancel}
          animationType="slide-up"
          title={
            <div className={classnames("title")}>
              <div className={classnames("title-left")} onClick={cancel}>
                取消
              </div>
              <div className={classnames("title-content")}>{label}</div>
              <div className={classnames("title-right")} onClick={confirm}>
                确认
              </div>
            </div>
          }
        >
          {panes &&
            panes.length > 0 &&
            panes.map((item: any) => (
              <div
                key={item.id}
                className={classnames("content-item", { active: item.checked })}
                onClick={() => choosePlace(item)}
              >
                <span>{item.name}</span>
                {item.checked && <Icon size="xs" type="check" />}
              </div>
            ))}
        </Modal>
      </div>
    );
  }
);

export default MultyModalFormItem;
