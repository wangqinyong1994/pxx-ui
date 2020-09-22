/* eslint-disable no-nested-ternary */
import React, { useMemo, useCallback } from "react";
import classnames from "classnames";
import { Picker, Icon } from "../index";
import { FormFieldProps } from "./PropsType";
import "./style/index.less";

// type: input | picker | modal ...

const FormField: React.FunctionComponent<FormFieldProps> = ({
  label,
  extraItem,
  labelImg,
  className,
  content,
  onClick,
  form,
  itemName,
  required,
  rules = [],
  fieldOptions = {},
  type = "input",
  pickerData = [],
  requiredTips = "",
}) => {
  const { getFieldDecorator, getFieldValue, getFieldError } = form;
  const fieldError = useMemo(() => {
    const errors = getFieldError(itemName);
    if (errors && errors.length > 0) {
      return errors.join(",");
    }
    return null;
  }, [itemName, getFieldError(itemName)]);

  const renderPickerText = useCallback((name, arr) => {
    const value = getFieldValue(name) && getFieldValue(name)[0];
    if (value || value === 0) {
      const target = arr.find((item: any) => item.value === value);
      if (target) {
        return target.label;
      }
    }
    return null;
  }, []);

  const renderPickerDom = useCallback(() => {
    const isGrew = !renderPickerText(itemName, pickerData);
    return (
      <div className={classnames("text-dom", { active: isGrew })}>
        {renderPickerText(itemName, pickerData) || `请选择${label}`}
      </div>
    );
  }, [label, itemName, pickerData]);

  const renderMainDom = useCallback(
    (domType) => {
      if (domType === "input" || domType === "modal") {
        return getFieldDecorator(itemName, {
          rules: [
            {
              required,
              message:
                requiredTips ||
                `${domType === "input" ? `请输入${label}` : `请选择${label}`}`,
            },
            ...rules,
          ],
          ...fieldOptions,
        })(content);
      }
      if (domType === "picker") {
        return getFieldDecorator(itemName, {
          rules: [
            {
              required,
              message: requiredTips || `请选择${label}`,
            },
            ...rules,
          ],
          ...fieldOptions,
        })(
          <Picker title={label} data={pickerData} cols={1}>
            {content || renderPickerDom()}
          </Picker>,
        );
      }
      return null;
    },
    [type, pickerData],
  );

  return (
    <div className={classnames("ppx-formfield", className)} onClick={onClick}>
      {extraItem || (
        <div className={classnames("control")}>
          <div className={classnames("header")}>
            <div className={classnames("label", { required })}>{label}</div>
            {type === "picker" || type === "modal"
              ? labelImg || <Icon type="right" color="#108ee9" />
              : null}
          </div>
          <div className={classnames("content")}>{renderMainDom(type)}</div>
          {fieldError && (
            <div className={classnames("error")}>{fieldError}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormField;
