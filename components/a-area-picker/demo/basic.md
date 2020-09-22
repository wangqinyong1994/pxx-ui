---
order: 0
title:
  zh-CN: "AreaPicker基本使用 "
  en-US: "usage"
---

```jsx
import { useCallback, useState } from "react";
import { Button } from "antd-mobile";
import AreaPicker from "../index.tsx";

const FormField = () => {
  const [areaPickerVisible, setAreaPickerVisible] = useState(false);

  const trigger = useCallback((val) => {
    setAreaPickerVisible(val);
  }, []);

  const onChooseHandler = useCallback((val) => {
    alert(JSON.stringify(val));
  });

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
      <AreaPicker
        limit={5}
        visible={areaPickerVisible}
        onChooseHandler={(val) => {
          onChooseHandler(val);
          trigger(false);
        }}
        onModalClose={() => trigger(false)}
        organizationListChild={organizationListChild}
        organizationGetRoot={organizationGetRoot}
      />
      <Button type="ghost" onClick={() => trigger(true)}>
        open
      </Button>
    </div>
  );
};

ReactDOM.render(<FormField />, mountNode);
```
