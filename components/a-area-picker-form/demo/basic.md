---
order: 0
title:
  zh-CN: "FormField areaPicker基本使用 "
  en-US: "usage"
---

AreaPickerFormItem

```jsx
import { useCallback } from "react";
import { Button } from "antd-mobile";
import { createForm } from "rc-form";
import AreaPickerFormItem from "../index.tsx";

const FormField = ({ form }) => {
  const submit = useCallback(() => {
    form.validateFields(async (errors, values) => {
      console.log(26, errors, values);
    });
  }, []);

  const organizationListChild = () => {
    const data = {
      data: [
        {
          orgName: "AAA",
          id: 1,
          parent: 1,
        },
        {
          orgName: "BBB",
          id: 2,
          parent: 2,
        },
        {
          orgName: "CCC",
          id: 3,
          parent: 3,
        },
      ],
    };
    return Promise.resolve(data);
  };

  const organizationGetRoot = () => Promise.resolve({ data: { id: 1 } });

  return (
    <div>
      <AreaPickerFormItem
        label="城市选择"
        form={form}
        itemName="cityChoose"
        organizationListChild={organizationListChild}
        organizationGetRoot={organizationGetRoot}
      />
      <Button type="primary" onClick={submit}>
        submit
      </Button>
    </div>
  );
};

const FormFieldDemo = createForm()(FormField);

ReactDOM.render(<FormFieldDemo />, mountNode);
```
