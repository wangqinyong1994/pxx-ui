import React, { useCallback, useState, useMemo } from "react";
import { Calendar, FormField } from "../index";
import dayjs from "dayjs";
import classnames from "classnames";
import { moment2Date } from "../_util/aformutils";
import { CalendarFormItemProps } from "./PropsType";

import "./style/index.less";

const CalendarFormItem = ({
  label = "日历",
  itemName = "date",
  form,
  tips = "",
  required = false,
  ...calendarRestProps
}: CalendarFormItemProps) => {
  const [calendarVisible, setCalendarVisible] = useState(false);

  const { getFieldValue, setFieldsValue } = form;

  const calendarOnConfirm = (startTime: Date, endTime: Date): void => {
    const timeArr = [
      dayjs(startTime).format("YYYY-MM-DD"),
      dayjs(endTime).format("YYYY-MM-DD"),
    ];
    setFieldsValue({
      [itemName]: timeArr,
    });
    setCalendarVisible(false);
  };

  const renderCalendarText = useMemo(() => {
    const calendarArr = getFieldValue(itemName);
    if (calendarArr && calendarArr.length && calendarArr[0]) {
      return `${calendarArr[0].split(" ")[0]}~${calendarArr[1].split(" ")[0]}`;
    }
    return tips || `请选择${label}`;
  }, [getFieldValue(itemName)]);

  const renderDefaultTimeValue = useCallback((): [Date, Date] => {
    const calendarArr = getFieldValue(itemName) as [Date, Date];
    if (calendarArr && calendarArr[0] && calendarArr[1]) {
      return [
        moment2Date(calendarArr[0]) as Date,
        moment2Date(calendarArr[1]) as Date,
      ];
    }
    return [new Date(), new Date()];
  }, [getFieldValue(itemName)]);

  return (
    <div>
      <FormField
        label={label}
        required={required}
        form={form}
        itemName={itemName}
        requiredTips={`请选择${label}`}
        controlClassName="tui-calendar-form"
        content={
          <div
            className={classnames("text-dom", {
              active: renderCalendarText.indexOf("请选择") > -1,
            })}
            onClick={() => setCalendarVisible(true)}
          >
            {renderCalendarText}
          </div>
        }
      />
      <Calendar
        {...calendarRestProps}
        visible={calendarVisible}
        defaultValue={renderDefaultTimeValue()}
        onCancel={() => setCalendarVisible(false)}
        onConfirm={calendarOnConfirm}
      />
    </div>
  );
};

export default CalendarFormItem;
