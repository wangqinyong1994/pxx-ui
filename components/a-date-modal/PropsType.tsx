import React from "react";

export interface Tab {
  date: Date;
  title: string;
  minDate: Date;
  maxDate: Date;
  mode: "date" | "time" | "datetime" | "year" | "month";
}

export interface DateModalProps {
  onChooseHandler?: Function;
  tabs: Tab[];
  renderChildren: (...args: any) => React.ReactChild;
}
