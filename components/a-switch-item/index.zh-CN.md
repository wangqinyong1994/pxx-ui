---
category: Components
type: FormField Element
title: SwitchFormItem
subtitle: 表单元素-滑动开关
---

滑动开关结合表单

## API

| 属性                                                         | 说明                                                 | 类型                      | 默认值 |
| ------------------------------------------------------------ | ---------------------------------------------------- | ------------------------- | ------ |
| label                                                        | 表单标题(必传)                                       | string/React.ReactElement | -      |
| itemName                                                     | 待校验表单元素标题，用于提交表单获取的对象键值(必传) | string                    | -      |
| form                                                         | 表单对象(必传)                                       | formShape                 | -      |
| checked                                                      | 滑动开关初始默认值                                   | boolean                   | false  |
| onChangeHandler                                              | 开关变化之后的回调                                   | Function                  | -      |
| `<K extends keyof SwitchPropsType>{[K]: SwitchPropsType[K]}` | 剩余属性同`Switch`                                   | Noop                      | -      |
