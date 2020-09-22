import React, { useState, useCallback, useMemo } from "react";
import classnames from "classnames";
import { debounce } from "lodash";
import { SearchBar, ActivityIndicator, Modal, FormField } from "../index";
import { ListItem, ChooseModalFormItemProps } from "./PropsType";

import "./style/index.less";

const ChooseModalFormItem: React.FC<ChooseModalFormItemProps> = ({
  label = "弹窗选择",
  itemName = "modalName",
  form,
  required = false,
  modalTitle = "弹窗标题",
  requiredTips,
  fetchFn,
}) => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([]);
  const [markText, setMarkText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { setFieldsValue, getFieldValue } = form;
  const onChange = debounce(async (val: any) => {
    try {
      if (val) {
        setLoading(true);
        const { data } = await fetchFn();
        setList(data);
        setMarkText(val);
      } else {
        setList([]);
        setMarkText("");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, 500);

  const reset = () => {
    setList([]);
    setMarkText("");
    setLoading(false);
    setVisible(false);
  };

  const chooseAddress = useCallback((item: ListItem) => {
    setFieldsValue({
      [itemName]: item,
    });
    reset();
  }, []);

  const onClose = () => {
    reset();
  };

  const renderChooseModalText = useMemo(() => {
    const val = getFieldValue(itemName);
    if (val) {
      return val.fullAddress || val.currentAddress;
    }
    return `请选择${label}`;
  }, [getFieldValue(itemName), label]);

  const renderList = () => {
    if (isLoading) {
      return <ActivityIndicator toast text="加载中..." animating />;
    }
    if (list && list.length > 0) {
      return (
        <div className={classnames("list-wrap")}>
          {list.map((item: ListItem) => (
            <FormField
              key={item.id}
              form={form}
              extraItem={
                <div className={classnames("card-wrap")}>
                  <div className={classnames("line1")}>{item.fullAddress}</div>
                  <div
                    className={classnames("line2")}
                    onClick={() => chooseAddress(item)}
                  >
                    选择
                  </div>
                </div>
              }
            />
          ))}
        </div>
      );
    }
    if (markText && !list.length) {
      return <div className={classnames("loading")}>无内容</div>;
    }
    return null;
  };

  return (
    <div>
      <FormField
        type="modal"
        label={label}
        itemName={itemName}
        form={form}
        controlClassName="choose-modal-formfield"
        content={
          <div
            className={classnames("text-dom", {
              active: renderChooseModalText.indexOf("请选择") > -1,
            })}
            onClick={() => setVisible(true)}
          >
            {renderChooseModalText}
          </div>
        }
        required={required}
        requiredTips={requiredTips}
      />
      <Modal
        title={modalTitle}
        visible={visible}
        popup
        closable
        onClose={onClose}
        animationType="slide-up"
        wrapClassName={classnames("ppx-choose-modal")}
      >
        <div className={classnames("choose-wrap")}>
          <div className={classnames("search-wrap")}>
            <SearchBar onChange={onChange} placeholder="选择地址" />
          </div>
          {renderList()}
        </div>
      </Modal>
    </div>
  );
};

export default ChooseModalFormItem;
