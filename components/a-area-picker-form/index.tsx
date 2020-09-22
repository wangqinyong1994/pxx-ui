import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { AreaPicker, FormField } from "../index";
import { Noop } from "../../typings/types";
import { flatArr } from "../_util/aformutils";
import { AreaPickerFormItemProps } from "./PropsType";

import "./style/index.less";

const AreaPickerFormItem: React.FC<AreaPickerFormItemProps> = ({
  label = "",
  itemName,
  form,
  limit = 2,
  required = false,
  disabled = false,
  errorTip = "",
  lastLevel,
  textDomClassName,
  organizationListChild,
  organizationGetRoot,
}) => {
  const [areaPickerVisible, setAreaPickerVisible] = useState(false);
  const { setFieldsValue, getFieldValue, setFields } = form;

  const areaPickerChooseHandler = (val: any[]) => {
    let orgNameStr = "";
    let idStr = "";
    let orgCodeStr = "";
    const retArr = flatArr(
      val.map((arr) => arr.filter((item: Noop) => item.checked)),
    );
    retArr.forEach((item: Noop) => {
      orgNameStr += `${item.orgName};`;
      idStr += `${item.id};`;
      orgCodeStr += `${item.orgInternalCode};`;
    });
    setFieldsValue({
      [itemName]: orgNameStr
        ? {
            orgNameStr: orgNameStr.slice(0, -1),
            idStr: idStr.slice(0, -1),
            orgCodeStr: orgCodeStr.slice(0, -1),
          }
        : undefined,
    });
    if (lastLevel) {
      const isLastLevel = retArr[retArr.length - 1].orgLevel === lastLevel;
      setFields({
        [itemName]: {
          value: getFieldValue(itemName),
          errors: [isLastLevel ? null : new Error(errorTip)],
        },
      });
    }
  };

  const renderPlaceValue = useMemo(() => {
    const value = getFieldValue(itemName);
    if (value && value.orgNameStr) {
      const { orgNameStr } = value;
      return orgNameStr ? orgNameStr.replaceAll(";", "-") : null;
    }
    return `请选择${label}`;
  }, [getFieldValue(itemName), label]);

  const areaPickerClose = () => {
    setAreaPickerVisible(false);
  };

  return (
    <div>
      <FormField
        type="modal"
        form={form}
        label={label}
        required
        itemName={itemName}
        rules={[{ required, message: errorTip || `选择${label}` }]}
        content={
          <div
            className={classnames("ppx-areatext-dom", textDomClassName, {
              active: renderPlaceValue.indexOf("请选择") > -1,
            })}
            onClick={() => {
              if (!disabled) {
                setAreaPickerVisible(true);
              }
            }}
          >
            {renderPlaceValue}
          </div>
        }
      />
      <AreaPicker
        limit={limit}
        visible={areaPickerVisible}
        onChooseHandler={areaPickerChooseHandler}
        onModalClose={areaPickerClose}
        organizationListChild={organizationListChild}
        organizationGetRoot={organizationGetRoot}
      />
    </div>
  );
};

export default AreaPickerFormItem;
