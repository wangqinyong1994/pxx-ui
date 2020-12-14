/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import classnames from "classnames";
import { Modal } from "../index";
import { FloatLayoutProps } from "./PropsType";

import "./style/index.less";

const FloatLayout: React.FC<FloatLayoutProps> = ({
  title,
  onConfirmHandler,
  onTriggerHander,
  wrapClassName = "",
  renderContainer,
  children,
  visible = false,
}) => {
  const confirm = () => {
    onConfirmHandler && onConfirmHandler(false);
  };
  const triggerFloatLayout = (val: any) => {
    onTriggerHander && onTriggerHander(val);
  };
  return (
    <React.Fragment>
      <Modal
        popup
        visible={visible}
        onClose={() => triggerFloatLayout(false)}
        animationType="slide-up"
        wrapClassName={classnames("ppx-floatlayout-modal", wrapClassName)}
      >
        <div className={classnames("modal-title")}>
          <span
            className={classnames("tool")}
            onClick={() => triggerFloatLayout(false)}
          >
            取消
          </span>
          <span className={classnames("name")}>{title}</span>
          <span className={classnames("tool")} onClick={confirm}>
            确定
          </span>
        </div>
        {renderContainer && (
          <div className={classnames("modal-container")}>{renderContainer}</div>
        )}
      </Modal>
      <span onClick={() => triggerFloatLayout(true)}>{children}</span>
    </React.Fragment>
  );
};

export default FloatLayout;
