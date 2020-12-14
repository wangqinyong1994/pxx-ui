import React from "react";

export interface FloatLayoutProps {
  title?: string | React.ReactElement;
  wrapClassName?: string;
  visible?: boolean;
  renderContainer?: any;
  onConfirmHandler?: Function;
  onTriggerHander?: Function;
}
