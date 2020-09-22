---
category: Components
type: FormField Element
title: MultyModalFormItem
subtitle: 表单元素-多选弹窗
---

多选弹窗结合表单元素

## API

| 属性           | 说明                                                  | 类型                      | 默认值          |
| -------------- | ----------------------------------------------------- | ------------------------- | --------------- |
| label          | 表单标题(必传)                                        | string/React.ReactElement | -               |
| itemName       | 待校验表单元素标题，用于提交表单获取的对象键值(必传)  | string                    | -               |
| form           | 表单对象(必传)                                        | formShape                 | -               |
| initPanes      | 初始化可选元素组(必传)                                | `any[]                    | Promise<any[]>` | - |
| initPanesFn    | 初始化可选元素组过滤方法，对初始化数组进预处理        | (arr: any[]) => any[]     | -               |
| required       | 表单是否必传                                          | boolean                   | false           |
| tips           | 当没有选择值时的文案展示                              | string                    | -               |
| sign           | 展示文案中各个选项直接的连接符                        | string                    | `;`             |
| confirmHandler | 点击确定按钮的回调函数                                | (arr: any[]) => void      | -               |
| rules          | 表单校验规则，表单对象同 antd`Form`                   | Rule[]                    | -               |
| fieldOptions   | 表单校验其他配置项，表单对象同 antd`Form`(待文档完善) | FieldOptions              | -               |
