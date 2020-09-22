---
order: 0
title:
  zh-CN: "表单 imagePicker基本使用 "
  en-US: "usage"
---

FormField

```jsx
import { useCallback } from "react";
import { Button } from "antd-mobile";
import { createForm } from "rc-form";
import ImagePickerFormItem from "../index.tsx";

const FormField = ({ form }) => {
  const submit = useCallback(() => {
    form.validateFields(async (errors, values) => {
      console.log(26, errors, values);
    });
  }, []);

  const uploadAllFile = useCallback((imgList) => {
    console.log(imgList);
  }, []);

  return (
    <div>
      <ImagePickerFormItem
        form={form}
        title="图片"
        uploadAllFile={uploadAllFile}
        required
      />
      <Button type="primary" onClick={submit}>
        primary
      </Button>
    </div>
  );
};

const FormFieldExample = createForm()(FormField);

ReactDOM.render(<FormFieldExample />, mountNode);
```
