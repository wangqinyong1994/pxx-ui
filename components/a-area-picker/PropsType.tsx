export type noop = () => {};

export interface AreaPickerProps {
  visible?: boolean;
  onModalClose?: Function;
  onChooseHandler?: Function;
  limit?: number;
  organizationListChild: (...args: any) => Promise<any> | noop;
  organizationGetRoot: (...args: any) => Promise<any> | noop;
}
