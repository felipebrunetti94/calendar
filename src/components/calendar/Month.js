import { format, addDays, isSameMonth, isSameDay } from "date-fns";
import Day from "./Day";

const Month = ({
  startDate,
  endDate,
  monthStart,
  selectedDate,
  onDateClick,
}) => {
  const getDayClass = (day) => {
    if (isSameDay(day, selectedDate)) {
      return "selected";
    }
    if (!isSameMonth(day, monthStart)) {
      return "disabled";
    }
    return "";
  };

  const rows = [];
  let days = [];
  let day = startDate;
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      getDayClass(day);
      days.push(
        <Day
          key={day}
          day={day}
          onDateClick={() => onDateClick(cloneDay)}
          dayClass={getDayClass(day)}
        />
      );

      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default Month;
