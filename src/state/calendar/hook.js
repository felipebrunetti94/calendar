import { useState } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";

const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
};

const useCalendar = () => {
  const [{ currentMonth, selectedDate }, setCalendar] = useState(initialState);
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  return {
    selectedDate,
    monthStart,
    endDate,
    startDate,
    currentMonth,
    nextMonth: () =>
      setCalendar((current) => ({
        ...current,
        currentMonth: addMonths(currentMonth, 1),
      })),
    prevMonth: () =>
      setCalendar((current) => ({
        ...current,
        currentMonth: subMonths(currentMonth, 1),
      })),
    setDate: (day) =>
      setCalendar((current) => ({
        ...current,
        selectedDate: day,
      })),
  };
};

export default useCalendar;
