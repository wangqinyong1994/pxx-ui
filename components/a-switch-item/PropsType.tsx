import { ReactElement } from "react";
import { SwitchPropsType } from "../switch/PropsType";

export interface SwitchFormItemProps extends SwitchPropsType {
  label?: string | ReactElement;
  itemName: string;
  form: any;
  checked?: boolean;
  onChangeHandler?: Function;
}
