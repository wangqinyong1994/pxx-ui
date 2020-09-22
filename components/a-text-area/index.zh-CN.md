---
category: Components
type: FormField Element
title: TextAreaFormItem
subtitle: 表单元素-文本框
---

文本框结合表单。

## API

| 属性                                                                     | 说明                                                 | 类型                      | 默认值  |
| ------------------------------------------------------------------------ | ---------------------------------------------------- | ------------------------- | ------- |
| label                                                                    | 表单标题(必传)                                       | string/React.ReactElement | 备注    |
| itemName                                                                 | 待校验表单元素标题，用于提交表单获取的对象键值(必传) | string                    | remarks |
| form                                                                     | 表单对象(必传)                                       | formShape                 | -       |
| required                                                                 | 表单是否必传                                         | boolean                   | false   |
| rules                                                                    | 表单校验规则，表单对象同 antd`Form`                  | Noop[]                    | -       |
| fieldOptions                                                             | 表单校验其他配置项，表单对象同 antd`Form`            | Noop                      | -       |
| `<K extends keyof TextAreaItemPropsType>{[K]: TextAreaItemPropsType[K]}` | 剩余属性同`TextareaItem`                             | Noop                      | -       |
