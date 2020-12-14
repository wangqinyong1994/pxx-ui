---
order: 0
title:
  zh-CN: "float-layout基本使用 "
  en-US: "usage"
---

Floatlayout

```jsx
import { useState, useCallback, useMemo } from "react";
import FloatLayout from "../index.tsx";

const Demo = ({}) => {
  const [visible, setVisible] = useState(false);
  const onConfirmHandler = useCallback((val) => {
    setVisible(false);
  }, []);
  const onTriggerHander = useCallback((val) => {
    setVisible(val);
  }, []);
  const renderContainer = useMemo((val) => {
    return (
      <div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
        <div>我是内容</div>
      </div>
    );
  }, []);

  return (
    <FloatLayout
      title="我是标题"
      visible={visible}
      onConfirmHandler={onConfirmHandler}
      onTriggerHander={onTriggerHander}
      wrapClassName="float-wrap"
      renderContainer={renderContainer}
    >
      <div onClick={() => onTriggerHander(true)}>点击</div>
    </FloatLayout>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
