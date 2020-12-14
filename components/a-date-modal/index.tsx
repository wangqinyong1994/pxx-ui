/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, forwardRef, useCallback, useRef } from "react";
import classnames from "classnames";
import { Modal, DatePickerView } from "../index";
import { DateModalProps } from "./PropsType";

import "./style/index";

const DateModal: React.FC<DateModalProps> = forwardRef(
  ({ onChooseHandler, tabs, renderChildren }, ref) => {
    const [visible, setVisible] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const [modalVal, setModalVal] = useState<any[]>([
      tabs[0].date,
      tabs[1].date,
    ]);
    const modalValRef = useRef(modalVal);
    const currentTabRef = useRef(currentTab);

    const onClose = useCallback(() => {
      setVisible(false);
      setTimeout(() => {
        setModalVal(modalValRef.current);
        setCurrentTab(currentTabRef.current);
      }, 0);
    }, [currentTab, modalVal]);

    const confirm = useCallback(() => {
      modalValRef.current = modalVal;
      currentTabRef.current = currentTab;
      setVisible(false);
      onChooseHandler &&
        onChooseHandler(modalVal[currentTab], tabs[currentTab].mode);
    }, [currentTab, modalVal]);

    const datePickerChange = useCallback(
      (date) => {
        const _modalVal = [...modalVal];
        _modalVal[currentTab] = date;
        setModalVal(_modalVal);
      },
      [currentTab, modalVal]
    );

    const changeTab = useCallback(
      (tab) => {
        setCurrentTab(tab);
      },
      [currentTab, modalVal]
    );

    return (
      <span className={classnames("ppx-datemodal-wrap")}>
        <span onClick={() => setVisible(true)}>
          {renderChildren(modalVal[currentTab], tabs[currentTab].mode)}
        </span>
        <Modal
          popup
          visible={visible}
          onClose={onClose}
          animationType="slide-up"
          wrapClassName={classnames("ppx-datemodal")}
        >
          <div className={classnames("modal-title")}>
            <span className={classnames("tool")} onClick={onClose}>
              取消
            </span>
            <span className={classnames("tool")} onClick={confirm}>
              确认
            </span>
          </div>
          <div className={classnames("modal-tabs")}>
            {tabs.length > 0 &&
              tabs.map((tab, index) => (
                <div
                  key={tab.title}
                  className={classnames("modal-tabs-item", {
                    active: currentTab === index,
                  })}
                  onClick={() => changeTab(index)}
                >
                  {tab.title}
                </div>
              ))}
          </div>
          <DatePickerView
            mode={tabs[currentTab].mode}
            value={modalVal[currentTab]}
            onChange={(date) => datePickerChange(date)}
            minDate={tabs[currentTab].minDate}
            maxDate={tabs[currentTab].maxDate}
          />
        </Modal>
      </span>
    );
  }
);

export default DateModal;
