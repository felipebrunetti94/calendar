import { useReminder } from "../../state/reminder/context";

const Reminder = ({ reminder, onClick }) => {
  const color = { backgroundColor: reminder.color };
  const handleClick = (event) => {
    event.stopPropagation();
    onClick();
  };
  return (
    <button className="reminder" style={color} onClick={handleClick}>
      <span className="reminder__content">
        {reminder.title || "(No title)"}
      </span>
    </button>
  );
};

const Reminders = ({ day, getDate }) => {
  const { openInfo, reminders, openAddReminder } = useReminder();
  return (
    <>
      {getDate()}
      <div className="reminder-container" onClick={() => openAddReminder(day)}>
        {reminders[day] &&
          reminders[day]
            .sort(compareTime)
            .map((reminder) => (
              <Reminder
                reminder={reminder}
                onClick={() => openInfo(reminder)}
              />
            ))}
      </div>
    </>
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
