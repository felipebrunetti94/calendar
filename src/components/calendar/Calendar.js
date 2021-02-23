import useCalendar from "../../state/calendar/hook";
import Header from "./Header";
import WeekDays from "./WeekDays";
import Month from "./Month";

const Calendar = () => {
  const {
    currentMonth,
    prevMonth,
    nextMonth,
    startDate,
    endDate,
    monthStart,
    selectedDate,
    setDate,
  } = useCalendar();
  return (
    <div className="calendar">
      <Header
        prevMonth={prevMonth}
        currentMonth={currentMonth}
        nextMonth={nextMonth}
      />
      <WeekDays currentMonth={currentMonth} />
      <Month
        startDate={startDate}
        endDate={endDate}
        monthStart={monthStart}
        selectedDate={selectedDate}
        onDateClick={setDate}
      />
    </div>
  );
};

export default Calendar;
