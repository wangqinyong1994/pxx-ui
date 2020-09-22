---
category: Components
type: Data Entry
title: FormField
subtitle: 通用表单元素
---

表单使用异步校验方式，同 antd`Form `相同，使用[async-validator](https://github.com/yiminghe/async-validator)。

## API

| 属性         | 说明                                                                         | 类型                                       | 默认值  |
| ------------ | ---------------------------------------------------------------------------- | ------------------------------------------ | ------- |
| label        | 表单标题(必传)                                                               | string/React.ReactElement                  | -       |
| itemName     | 待校验表单元素标题，用于提交表单获取的对象键值(必传)                         | string                                     | -       |
| form         | 表单对象(必传)                                                               | formShape                                  | -       |
| content      | 待校验表单元素(必传)                                                         | any                                        | -       |
| type         | 按钮类型，可选值为`input`/`picker`                                           | string                                     | `input` |
| required     | 表单是否必传                                                                 | boolean                                    | false   |
| rules        | 表单校验规则，表单对象同 antd`Form`                                          | Rule[]                                     | -       |
| fieldOptions | 表单校验其他配置项，表单对象同 antd`Form`(待文档完善)                        | FieldOptions                               | -       |
| pickerData   | 当 `type` 类型选择`picker`时，picker 内元素选项                              | SinglePickerData[]                         | -       |
| onClick      | 最外层父元素点击事件                                                         | (event: FormEvent<HTMLDivElement>) => void | -       |
| requiredTips | 当表单选项 required 为 true 时，会有默认的必填提示，此属性提供自定义必填提示 | string                                     | -       |
| labelImg     | 表单右上角 icon，`picker`状态下有默认值`<Icon type="right" />`               | any                                        | -       |
| className    | 最外层父元素自定义类名                                                       | string                                     | -       |
| extraItem    | 自定义需校验表单内容                                                         | React.ReactElement                         | -       |
