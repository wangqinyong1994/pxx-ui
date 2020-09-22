---
category: Components
type: Combination
title: AreaPicker
subtitle: 区域选择
---

区域选择弹窗，可选择到网格层级，需要传入获取根节点方法以及通过父级查子级方法，并且返回的数据结构类型一致(以公司用户中心接口返回为准)。

## API

| 属性                  | 说明                                                | 类型                            | 默认值 |
| --------------------- | --------------------------------------------------- | ------------------------------- | ------ |
| organizationGetRoot   | 获取组织机构根节点方法(必传)                        | `(...args: any) => Promise<any> | noop`  | - |
| organizationListChild | 根据父级展示子级节点方法(必传)                      | `(...args: any) => Promise<any> | noop`  | - |
| visible               | 控制弹窗显隐                                        | boolean                         | false  |
| limit                 | 选择到的层级控制(0~5: 省、市、区、街道、社区、网格) | number                          | 5      |
| onModalClose          | 弹窗关闭回调                                        | Function                        | -      |
| onChooseHandler       | 选择`确定`回调                                      | Function                        | -      |

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
