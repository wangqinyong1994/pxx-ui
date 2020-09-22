/* eslint-disable no-shadow */
import React from "react";
import classnames from "classnames";
import Switch from "../switch";
import { SwitchFormItemProps } from "./PropsType";

import "./style/index.less";

const SwitchFormItem: React.FC<SwitchFormItemProps> = ({
  label,
  itemName,
  form,
  checked = false,
  onChangeHandler,
  ...rest
}) => {
  const { getFieldProps, setFieldsValue } = form;
  return (
    <div className={classnames("ppx-switch-item")}>
      <div className={classnames("title")}>{label}</div>
      <Switch
        {...rest}
        {...getFieldProps(itemName, {
          initialValue: checked,
          valuePropName: "checked",
        })}
        color={rest.color || "#4A7EFE"}
        onClick={(val) => {
          if (onChangeHandler) {
            onChangeHandler(val);
          }
          setFieldsValue({
            [itemName]: val,
          });
        }}
      />
    </div>
  );
};

export default SwitchFormItem;
