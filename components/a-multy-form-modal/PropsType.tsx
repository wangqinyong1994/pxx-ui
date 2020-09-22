import { Noop } from "../../typings/types";

interface PanesProps {
  id: number;
  name: string;
}

export interface MultyModalFormItemProps {
  label: string;
  itemName: string;
  form: any;
  rules?: Noop[];
  fieldOptions?: Noop;
  initPanes: PanesProps[] | Promise<any[]>;
  initPanesFn?: (arr: PanesProps[]) => any[];
  required?: boolean;
  tips?: string;
  sign?: string;
  confirmHandler?: (arr: any[]) => void;
}
