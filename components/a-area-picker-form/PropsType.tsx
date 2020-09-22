export type noop = () => {};

// 网格层级orgLevel 90170001
export interface AreaPickerFormItemProps {
  label?: string;
  itemName: string;
  form: any;
  limit?: number;
  required?: boolean;
  disabled?: boolean;
  errorTip?: string;
  lastLevel?: number;
  textDomClassName?: string;
  organizationListChild: (...args: any) => Promise<any> | noop;
  organizationGetRoot: (...args: any) => Promise<any> | noop;
}
