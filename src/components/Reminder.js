const Reminder = ({ reminder }) => {
  const style = { background: reminder.color };
  return (
    <dl style={style}>
      <dt>Message:</dt>
      <dd>{reminder.message}</dd>
      <dt>Time</dt>
      <dd>{reminder.time}</dd>
      <dt>city</dt>
      <dd>{reminder.city}</dd>
    </dl>
  );
};

const Reminders = ({ reminders }) => {
  return (
    <ul>
      {reminders.sort(compareTime).map((reminder) => (
        <li key={reminder.message}>
          <Reminder reminder={reminder} />
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
