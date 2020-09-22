import React, { useMemo } from "react";
import classnames from "classnames";
import TextareaItem from "../textarea-item";
import FormField from "../a-form-field";
import { TextAreaFormItemProps } from "./PropsType";

import "./style/index.less";

const TextAreaFormItem: React.FC<TextAreaFormItemProps> = ({
  label = "备注",
  itemName = "remarks",
  form,
  required = false,
  rules = [],
  fieldOptions = {},
  ...rest
}) => {
  const { getFieldProps, getFieldError } = form;

  const fieldError = useMemo(() => {
    const errors = getFieldError(itemName);
    if (errors && errors.length > 0) {
      return errors.join(",");
    }
    return null;
  }, [itemName, getFieldError(itemName)]);

  return (
    <FormField
      form={form}
      extraItem={
        <div className={classnames("ppx-textarea-item")}>
          <div className={classnames("remark-title", { required })}>
            {label}
          </div>
          <div className={classnames("remark")}>
            <TextareaItem
              {...rest}
              placeholder={`请输入${label}`}
              {...getFieldProps(itemName, {
                rules: [
                  {
                    required,
                    message: `请输入${label}`,
                  },
                  ...rules,
                ],
                ...fieldOptions,
              })}
              rows={3}
            />
          </div>
          {fieldError && (
            <div className={classnames("error")}>{fieldError}</div>
          )}
        </div>
      }
    />
  );
};

export default TextAreaFormItem;
