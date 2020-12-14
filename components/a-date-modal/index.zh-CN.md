---
category: Components
type: Data Entry
title: ADateModal
subtitle: 日期范围弹窗
---

日期范围弹窗

## API

### props

| 属性            | 说明             | 类型                               | 默认值 |
| --------------- | ---------------- | ---------------------------------- | ------ |
| tabs            | 默认值常量(必传) | Tab[]                              | -      |
| renderChildren  | 被挂载元素(必传) | (...args: any) => React.ReactChild | -      |
| onChooseHandler | 确认回调函数     | formShape                          | -      |

### Tab

| 属性    | 说明               | 类型    | 默认值 |
| ------- | ------------------ | ------- | ------ |
| date    | 日期对象(必传)     | Date    | -      |
| title   | tab 名字(必传)     | string  | -      |
| minDate | 最小选择日期(必传) | Date    | -      |
| maxDate | 最大选择日期(必传) | Date    | -      |
| mode    | 日期模式(必传)     | `"date" | "time" | "datetime" | "year" | "month" ` | - |
