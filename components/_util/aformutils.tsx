import dayjs from "dayjs";

export const flatArr = (arr: any[]): any[] =>
  arr.reduce(
    (prev, next) => prev.concat(Array.isArray(next) ? flatArr(next) : next),
    [],
  );

export const moment2Date = (val: string | Date) => {
  if (!val) return undefined;
  return new Date(dayjs(val).format("YYYY-MM-DD"));
};
