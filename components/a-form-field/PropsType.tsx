import { ReactElement, FormEvent } from "react";
import { Noop, SinglePickerData } from "../../typings/types";

export interface FormFieldProps {
  label?: string | ReactElement;
  itemName?: string;
  form?: any;
  content?: any;
  type?: "input" | "picker" | "modal";
  required?: boolean;
  rules?: Noop[];
  fieldOptions?: Noop;
  pickerData?: SinglePickerData[];
  onClick?: (event: FormEvent<HTMLDivElement>) => void;
  requiredTips?: string;
  controlClassName?: string;
  labelImg?: any;
  className?: string;
  extraItem?: ReactElement;
}
