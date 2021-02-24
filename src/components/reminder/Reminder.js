import { Button } from "@material-ui/core";
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
  const {
    openEditReminder,
    getBy,
    openAddReminder,
    removeAllReminders,
  } = useReminder();
  const reminders = getBy(day);
  const isOverFlowing = reminders.length > 3;
  return (
    <>
      {getDate()}
      {!!reminders.length && (
        <span
          role="button"
          className="col cell danger"
          color="secondary"
          onClick={() => removeAllReminders(day)}
        >
          Clear Day
        </span>
      )}

      <div
        className={`reminder-container ${isOverFlowing && "overflow"}`}
        data-testid={`${getDate(day)}`}
        onClick={() => openAddReminder(day)}
      >
        {reminders &&
          reminders
            .sort(compareTime)
            .map((reminder) => (
              <Reminder
                key={reminder.key}
                reminder={reminder}
                onClick={() => openEditReminder(reminder)}
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
