---
order: 0
title:
  zh-CN: "几种使用类型"
  en-US: "use type"
---

FormField

```jsx
import { useCallback } from "react";
import { Button, InputItem } from "antd-mobile";
import { createForm } from "rc-form";
import FormField from "../index.tsx";

const concatType = [
  { label: "仅手机", value: "1" },
  { label: "仅固定电话", value: "2" },
  { label: "手机和固定电话", value: "3" },
];

const AFormField = ({ form }) => {
  const submit = useCallback(() => {
    form.validateFields(async (errors, values) => {
      console.log(26, errors, values);
    });
  }, []);

  return (
    <div>
      <FormField
        label="租赁备案证号"
        content={
          <InputItem maxLength={80} clear placeholder="请输入租赁备案证号" />
        }
        required
        itemName="houseFileNumber"
        form={form}
      />
      <FormField
        label="联系方式"
        required
        itemName="concatType"
        form={form}
        type="picker"
        pickerData={concatType}
      />
      <FormField
        label="曾用名/别名"
        itemName="usedname"
        form={form}
        content={<InputItem clear placeholder="请输入曾用名/别名" />}
        rules={[
          // {
          //   pattern: /\d+/,
          //   message: "曾用名/别名不符合规范",
          // },
          {
            validator: (rule, value, callback) => {
              if (value && value.length < 5) {
                callback("哈哈哈哈哈哈");
              } else {
                callback();
              }
            },
          },
        ]}
      />
      <Button type="primary" onClick={submit}>
        primary
      </Button>
    </div>
  );
};

const FormFieldExample = createForm()(AFormField);

ReactDOM.render(<FormFieldExample />, mountNode);
```
