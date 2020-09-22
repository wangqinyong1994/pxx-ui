---
category: Components
type: FormField Element
title: ImagePickerFormItem
subtitle: 表单元素-图片选择器
---

图片选择结合表单元素。

## API

| 属性             | 说明                                                  | 类型                                   | 默认值 |
| ---------------- | ----------------------------------------------------- | -------------------------------------- | ------ |
| label            | 表单标题(必传)                                        | string/React.ReactElement              | 附件   |
| itemName         | 待校验表单元素标题，用于提交表单获取的对象键值(必传)  | string                                 | files  |
| form             | 表单对象(必传)                                        | formShape                              | -      |
| uploadAllFile    | 图片上传方法，需要外部提供(必传)                      | (files: file[]) => void                | -      |
| limit            | 上传图片总数限制                                      | number                                 | 8      |
| required         | 表单是否必传                                          | boolean                                | false  |
| rules            | 表单校验规则，表单对象同 antd`Form`                   | Noop[]                                 | -      |
| fieldOptions     | 表单校验其他配置项，表单对象同 antd`Form`(待文档完善) | Noop                                   | -      |
| imagePickerClick | 图片点击回调函数                                      | (index: number, files: file[]) => void | -      |

## uploadAllFile 方法

```ts
// 需要oss配置&TQPrism

const uploadFile = (img) =>
  new Promise((resolve, reject) => {
    try {
      TQPrism.uploadFile({
        url: `${ossUrl}tqOssManager/putTmpObject?auther=${ossAuthor}`,
        filePath: img.url,
        name: "uploadFile",
        header: {
          ossobjectconfig: `{"reallyFileName":"${encodeURI(img.file.name)}"}`,
        },
      })
        .then((res) => {
          if (res.statusCode === 200) {
            const result: Noop = {};
            result.taskcenterUrl = res.data
              .match(new RegExp(/url=([^,]+)/))[0]
              .replace("url=", "")
              .replace("url=", "")
              .replace("TQFS://", "");
            result.isTaskCenter = true;
            result.ossUri = res.data
              .match(new RegExp(/uri=([^,]+)/))[0]
              .replace("uri=", "");
            result.fileName = img.file.name;
            resolve(result);
          } else {
            reject(res.errMsg);
          }
        })
        .catch(reject);
    } catch (error) {}
  });

const uploadAllFile = (imgList = []) => {
  if (!Array.isArray(imgList)) {
    imgList = [];
  }
  const promiseList = imgList.map((item) => uploadFile(item));
  return Promise.all(promiseList);
};
```
