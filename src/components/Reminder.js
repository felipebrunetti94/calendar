const Reminder = ({ reminder }) => {
  const style = { backgroud: reminder.color };
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
  return reminders.map((reminder) => <Reminder reminder={reminder} />);
};

export default Reminders;
