---
category: Components
type: FormField Element
title: CalendarFormItem
subtitle: 表单元素-日历
---

日历结合表单元素。

## API

| 属性                                                     | 说明                                                 | 类型                      | 默认值 |
| -------------------------------------------------------- | ---------------------------------------------------- | ------------------------- | ------ |
| label                                                    | 表单标题(必传)                                       | string/React.ReactElement | 日历   |
| itemName                                                 | 待校验表单元素标题，用于提交表单获取的对象键值(必传) | string                    | date   |
| form                                                     | 表单对象(必传)                                       | formShape                 | -      |
| tips                                                     | 自定义展示文案                                       | string                    | -      |
| required                                                 | 表单是否必传                                         | boolean                   | false  |
| `<K extends keyof CalendarProps>{[K]: CalendarProps[K]}` | 剩余属性同`Calendar`                                 | Noop                      | -      |
