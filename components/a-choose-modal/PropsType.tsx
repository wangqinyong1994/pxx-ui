import React from "react";
import { Noop } from "../../typings/types";

export interface ListItem extends Noop {
  id: number;
  ifUsed: boolean;
  fullAddress: string;
}

export interface ChooseModalFormItemProps {
  label?: string | React.ReactElement;
  itemName?: string;
  form: any;
  required?: boolean;
  modalTitle?: string;
  requiredTips?: string;
  fetchFn: (...args: any) => Promise<any>;
}
