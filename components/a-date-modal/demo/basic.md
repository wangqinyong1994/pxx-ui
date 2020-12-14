---
order: 0
title:
  zh-CN: "date-modal基本使用 "
  en-US: "usage"
---

DateModal

```jsx
import { useCallback } from "react";
import { Button } from "antd-mobile";
import moment from "moment";
import DateModal from "../index.tsx";

const Demo = ({}) => {
  const onChooseHandler = useCallback((date) => {
    alert(date);
  }, []);

  return (
    <div>
      <DateModal
        onChooseHandler={onChooseHandler}
        tabs={[
          {
            title: "按月",
            date: new Date(moment().format("YYYY-MM")),
            minDate: new Date("2020-1"),
            maxDate: new Date(moment().add(2, "years").format("YYYY-MM")),
            mode: "month",
          },
          {
            title: "按年",
            date: new Date(moment().format("YYYY")),
            minDate: new Date("2020"),
            maxDate: new Date(moment().add(2, "years").format("YYYY")),
            mode: "year",
          },
        ]}
        renderChildren={(date, mode) => (
          <span>
            {moment(date).format(mode === "month" ? "YYYY-MM" : "YYYY")}
          </span>
        )}
      ></DateModal>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
