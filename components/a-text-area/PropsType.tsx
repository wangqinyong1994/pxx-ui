import { ReactElement } from "react";
import { Noop } from "../../typings/types";
import { TextAreaItemPropsType } from "../textarea-item/PropsType";

export interface TextAreaFormItemProps extends TextAreaItemPropsType {
  label?: string | ReactElement;
  itemName: string;
  form: any;
  required?: boolean;
  rules?: Noop[];
  fieldOptions?: Noop;
}
