import WeekDays from "./WeekDays";
import MonthDays from "./MonthDays";
import ReminderEdit from "./ReminderEdit";

const Calendar = ({}) => {
  const editing = true;
  return (
    <>
      <WeekDays />
      <MonthDays size={35} />
      {editing && <ReminderEdit />}
    </>
  );
};
export default Calendar;
