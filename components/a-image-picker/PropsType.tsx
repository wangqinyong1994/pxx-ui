import React from "react";
import { Noop } from "../../typings/types";

export interface ImagePickerFormItemProps {
  label?: string | React.ReactElement;
  itemName?: string;
  form: any;
  limit?: number;
  required?: boolean;
  rules?: Noop[];
  fieldOptions?: Noop;
  imagePickerClick?: (...args: any) => {};
  uploadAllFile: (imgList: any[]) => Promise<any[]>;
}
