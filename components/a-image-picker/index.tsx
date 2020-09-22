import React, { useMemo } from "react";
import classnames from "classnames";
import { ImagePicker, Toast, FormField } from "../index";
import { ImagePickerFormItemProps } from "./PropsType";

import "./style/index.less";

const ImagePickerFormItem: React.FC<ImagePickerFormItemProps> = ({
  label = "附件",
  itemName = "files",
  form,
  limit = 8,
  required = false,
  rules = [],
  fieldOptions = {},
  imagePickerClick,
  uploadAllFile,
}) => {
  const { getFieldProps, getFieldValue, getFieldError, setFieldsValue } = form;
  const imagePickerChange = async (files: any[]) => {
    try {
      let _files: any[] = files.slice();
      if (files.length >= limit) {
        if (files.length > limit) {
          Toast.info(`最多上传${limit}张图片`);
        }
        _files = files.slice(0, limit);
      }
      const _res = (await uploadAllFile(_files)) as any;
      const res = _res.map((item: any, index: any) =>
        Object.assign(item, files[index], {
          ossKey: `${item.taskcenterUrl}`,
          uri: `${item.taskcenterUrl}`,
        }),
      );
      setFieldsValue({
        [itemName]: res,
      });
    } catch (error) {}
  };

  const fieldError = useMemo(() => {
    const errors = getFieldError(itemName);
    if (errors && errors.length > 0) {
      return errors.join(",");
    }
    return null;
  }, [itemName, getFieldError(itemName)]);

  const imagePickerChangeClick = (index: any, files: any) => {
    if (imagePickerClick) {
      imagePickerClick(index, files);
    }
  };
  return (
    <FormField
      form={form}
      extraItem={
        <div className={classnames("ppx-image-picker")}>
          <div className={classnames("remark-title", { required })}>
            {label}
          </div>
          <div className={classnames("remark")}>
            <ImagePicker
              {...getFieldProps(itemName, {
                valuePropName: "files",
                rules: [
                  {
                    required,
                    message: `请选择${label}`,
                  },
                  ...rules,
                ],
                ...fieldOptions,
              })}
              accept="image/*"
              onChange={imagePickerChange}
              onImageClick={imagePickerChangeClick}
              selectable={
                limit >
                ((getFieldValue(itemName) && getFieldValue(itemName).length) ||
                  0)
              }
              multiple
            />
            {fieldError && (
              <div className={classnames("error")}>{fieldError}</div>
            )}
          </div>
        </div>
      }
    />
  );
};

export default ImagePickerFormItem;
