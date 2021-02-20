import Reminders from "./Reminder";

const Day = ({ day, onRemove }) => {
  const { date, weather, reminders } = day;
  const hasReminders = reminders.length > 0;
  const handleOnRemove = (event) => {
    event.stopPropagation();
    onRemove(day);
  };

  return (
    <li className="day">
      <button onClick={handleOnRemove}>remove all</button>
      <span>{date}</span>
      <span>{weather}</span>
      {hasReminders && <Reminders reminders={reminders} />}
    </li>
  );
};

export default Day;
