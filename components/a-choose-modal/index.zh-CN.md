---
category: Components
type: FormField Element
title: ChooseModalFormItem
subtitle: 表单元素-带搜索弹窗
---

选择弹窗结合表单元素

## API

| 属性         | 说明                                                                         | 类型                        | 默认值    |
| ------------ | ---------------------------------------------------------------------------- | --------------------------- | --------- |
| label        | 表单标题(必传)                                                               | string/React.ReactElement   | 弹窗选择  |
| itemName     | 待校验表单元素标题，用于提交表单获取的对象键值(必传)                         | string                      | modalName |
| form         | 表单对象(必传)                                                               | formShape                   | -         |
| fetchFn      | 输入框搜索检索方法(必传)                                                     | (...args) => Promise<any[]> | -         |
| required     | 表单是否必传                                                                 | boolean                     | false     |
| modalTitle   | 弹窗标题                                                                     | string                      | 弹窗标题  |
| requiredTips | 当表单选项 required 为 true 时，会有默认的必填提示，此属性提供自定义必填提示 | string                      | -         |
