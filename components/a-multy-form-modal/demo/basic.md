---
order: 0
title:
  zh-CN: "表单 多选 基本使用 "
  en-US: "usage"
---

MultyModalFormItem

```jsx
import { useCallback, useState, useEffect } from "react";
import { Button } from "antd-mobile";
import { createForm } from "rc-form";
import MultyModalFormItem from "../index.tsx";

const FormField = ({ form }) => {
  const [asyncPanes, setAsyncPanes] = useState([]);

  const submit = useCallback(() => {
    form.validateFields(async (errors, values) => {
      console.log(26, errors, values);
    });
  }, []);

  const getAsyncPanes = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "1",
            displayname: "1",
          },
          {
            id: 2,
            name: "1",
            displayname: "2",
          },
          {
            id: 3,
            name: "1",
            displayname: "3",
          },
        ]);
      });
    }, 3000);

  const _getAsyncPanes = async () => {
    try {
      const res = await getAsyncPanes();
      setAsyncPanes(res);
    } catch (err) {
      console.log(err);
    }
  };

  // 预处理数据方法
  const initPanesFn = useCallback(
    (res) =>
      res.map((item) => ({
        id: item.id,
        name: item.displayname,
        checked: item.checked || false,
      })),
    []
  );

  // 选择确认的回调函数
  const confirmHandler = useCallback((arr) => {
    alert(JSON.stringify(arr));
  }, []);

  // 模拟异步获取数据
  useEffect(() => {
    _getAsyncPanes();
  }, []);

  return (
    <div>
      <MultyModalFormItem
        form={form}
        itemName="multyform"
        label="多选默认分隔符"
        required
        initPanes={Promise.resolve([
          {
            id: 1,
            name: "1",
            displayname: "1",
          },
          {
            id: 2,
            name: "1",
            displayname: "2",
          },
          {
            id: 3,
            name: "1",
            displayname: "3",
          },
        ])}
        initPanesFn={initPanesFn}
        confirmHandler={confirmHandler}
        rules={[
          {
            validator: (rule, value, callback) => {
              try {
                callback();
              } catch (err) {
                console.log(err);
              }
            },
          },
        ]}
      />
      <MultyModalFormItem
        form={form}
        itemName="multyform1"
        label="多选自定义默认分隔符"
        required
        initPanes={asyncPanes}
        initPanesFn={initPanesFn}
        sign=" > "
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
