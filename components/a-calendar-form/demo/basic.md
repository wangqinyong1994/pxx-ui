---
order: 0
title:
  zh-CN: "表单 Calendar基本使用 "
  en-US: "usage"
---

FormField

```jsx
import { useCallback } from "react";
import { Button } from "antd-mobile";
import { createForm } from "rc-form";
import CalendarFormItem from "../index.tsx";

const FormField = ({ form }) => {
  const submit = useCallback(() => {
    form.validateFields(async (errors, values) => {
      console.log(26, errors, values);
    });
  }, []);

  return (
    <div>
      <CalendarFormItem
        form={form}
        itemName="calendar"
        label="时间段"
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
