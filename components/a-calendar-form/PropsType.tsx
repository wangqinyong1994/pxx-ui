import { CalendarProps } from "../calendar/PropsType";

export interface CalendarFormItemProps extends CalendarProps {
  label: string;
  itemName: string;
  form: any;
  tips?: string;
  required?: boolean;
}
