import Reminders from "./Reminder";

const Day = ({ day, onRemoveAll, onClick, reminders, onReminderClick }) => {
  const hasReminders = !!reminders;
  const handleOnRemove = (event) => {
    event.stopPropagation();
    onRemoveAll(day);
  };
  const handleClick = () => {
    onClick(day);
  };
  return (
    <li className="day" onClick={handleClick}>
      {hasReminders && <button onClick={handleOnRemove}>remove all</button>}
      <span>{day}</span>
      {hasReminders && (
        <Reminders reminders={reminders} onReminderClick={onReminderClick} />
      )}
    </li>
  );
};

export default Day;
