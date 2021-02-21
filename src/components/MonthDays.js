import Day from "./Day";

const MonthDays = ({
  onDayClick,
  days,
  reminders,
  onReminderClick,
  onRemoveAll,
}) => {
  return (
    <ol>
      {days.map((day) => (
        <Day
          day={day}
          onClick={onDayClick}
          reminders={reminders[day]}
          onReminderClick={onReminderClick}
          onRemoveAll={onRemoveAll}
        />
      ))}
    </ol>
  );
};

export default MonthDays;
