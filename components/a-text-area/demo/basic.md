---
order: 0
title:
  zh-CN: "表单 textarea基本使用 "
  en-US: "usage"
---

TextAreaFormItem

```jsx
import { useCallback } from "react";
import { Button } from "antd-mobile";
import { createForm } from "rc-form";
import TextAreaFormItem from "../index.tsx";

const FormField = ({ form }) => {
  const submit = useCallback(() => {
    form.validateFields(async (errors, values) => {
      console.log(26, errors, values);
    });
  }, []);

  return (
    <div>
      <TextAreaFormItem required form={form} count={100} />
      <Button type="primary" onClick={submit}>
        primary
      </Button>
    </div>
  );
};

const FormFieldExample = createForm()(FormField);

ReactDOM.render(<FormFieldExample />, mountNode);
```
