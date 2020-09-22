---
category: Components
type: FormField Element
title: AreaPickerFormItem
subtitle: 表单元素-区域选择
---

区域选择弹窗结合表单使用，可选择到网格层级，需要传入获取根节点方法以及通过父级查子级方法，并且返回的数据结构类型一致(以公司用户中心接口返回为准)。

## API

| 属性                  | 说明                                                                                                          | 类型                            | 默认值 |
| --------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| label                 | 表单标题(必传)                                                                                                | string/React.ReactElement       | -      |
| itemName              | 待校验表单元素标题，用于提交表单获取的对象键值(必传)                                                          | string                          | -      |
| form                  | 表单对象(必传)                                                                                                | formShape                       | -      |
| organizationGetRoot   | 获取组织机构根节点方法(必传)                                                                                  | `(...args: any) => Promise<any> | noop`  | - |
| organizationListChild | 根据父级展示子级节点方法(必传)                                                                                | `(...args: any) => Promise<any> | noop`  | - |
| limit                 | 选择到的层级控制(0~5: 省、市、区、街道、社区、网格)                                                           | number                          | 2      |
| required              | 表单是否必传                                                                                                  | boolean                         | false  |
| disabled              | 表单是否不可点击                                                                                              | boolean                         | false  |
| errorTip              | 当`required`为`true`时，自定义错误提示                                                                        | string                          | -      |
| lastLevel             | 选择到的层级控制(60~10: 省、市、区、街道、社区、网格)，当有值时，判断如果没有选到对应层级，就给`errorTip`提示 | number                          | -      |
| onModalClose          | 弹窗关闭回调                                                                                                  | Function                        | -      |
| onChooseHandler       | 选择`确定`回调                                                                                                | Function                        | -      |

## 必传的两个方法

```jsx
// organizationListChild({ id, 'orgType[]': 90180001 })
// organizationGetRoot({})

// 公司用户中心-组织机构获取根节点
export const organizationGetRoot = async (data: any) =>
  request("/doraemon-system/organization/getRoot", {
    method: "GET",
    data,
  });
// 公司用户中心-获取用户可操作的根节点
export const organizationGetUserRoot = async (data: any) =>
  request("/doraemon-system/organization/getUserRoot", {
    method: "GET",
    data,
  });
```
