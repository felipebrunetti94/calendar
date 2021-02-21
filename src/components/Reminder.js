const Reminder = ({ reminder, onClick }) => {
  const style = { background: reminder.color };
  const handleClick = (event) => {
    event.stopPropagation();
    onClick(reminder);
  };
  return (
    <dl style={style} onClick={handleClick}>
      <dt>Message:</dt>
      <dd>{reminder.message}</dd>
      <dt>Time</dt>
      <dd>{reminder.time}</dd>
      <dt>city</dt>
      <dd>{reminder.city}</dd>
      <dt>weather</dt>
      <dd>{reminder.weather}</dd>
    </dl>
  );
};

const Reminders = ({ reminders, onReminderClick }) => {
  return (
    <ul>
      {reminders.sort(compareTime).map((reminder) => (
        <li key={reminder.message}>
          <Reminder reminder={reminder} onClick={onReminderClick} />
        </li>
      ))}
    </ul>
  );
};

const convertToMinutes = ({ time }) => {
  const [hour, minutes] = time.split(":");
  return hour * 60 + minutes;
};
const compareTime = (a, b) => {
  return convertToMinutes(a) - convertToMinutes(b);
};

export default Reminders;
