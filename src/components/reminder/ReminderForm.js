import { format, parseISO } from "date-fns";
import ErrorMessage from "../error/ErrorMessage";

const ReminderForm = ({
  reminder = {},
  setReminder,
  onSubmit,
  onClick,
  showRemoveButton = false,
  showDate = false,
  onRemove,
  actionTitle,
  getWeather,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReminder({ [name]: value });
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    const nextDate = parseISO(value);
    setReminder({ [name]: nextDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(reminder);
  };

  const handleRemove = (event) => {
    event.preventDefault();
    onRemove(reminder);
  };

  const handleBlur = () => {
    getWeather(reminder.city);
  };
  const dateFormat = "PPPP";

  return (
    <div onClick={onClick}>
      <h2>{format(reminder.date, dateFormat)}</h2>
      <form onSubmit={handleSubmit}>
        {showDate && (
          <>
            <label htmlFor="date">Date:</label>
            <input
              name="date"
              type="date"
              maxLength="30"
              value={reminder.date || ""}
              onChange={handleDateChange}
              data-testid="input-date"
            />
          </>
        )}
        <label htmlFor="title">Title:</label>
        <input
          autoFocus
          name="title"
          type="text"
          maxLength="30"
          value={reminder.title || ""}
          onChange={handleChange}
          data-testid="input-title"
        />
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="textbox"
          value={reminder.description || ""}
          onChange={handleChange}
          data-testid="input-description"
        />
        <label htmlFor="time">Time</label>
        <input
          name="time"
          type="time"
          value={reminder.time || ""}
          onChange={handleChange}
          data-testid="input-time"
        />
        <label htmlFor="color">color</label>
        <input
          name="color"
          type="color"
          value={reminder.color || "#ffffff"}
          onChange={handleChange}
          data-testid="input-color"
        />
        <label htmlFor="city">city</label>
        <input
          name="city"
          type="text"
          value={reminder.city || ""}
          onChange={handleChange}
          data-testid="input-city"
          onBlur={handleBlur}
        />
        {reminder.error && <ErrorMessage error={reminder.error} />}
        {reminder.isLoading && <span>Looking for the weather forecast...</span>}
        {reminder.weather && (
          <>
            <label htmlFor="weather">weather</label>
            <input
              name="weather"
              type="text"
              readOnly
              value={reminder.weather || ""}
              data-testid="input-weather"
            />
          </>
        )}
        <input
          type="submit"
          value={actionTitle}
          disabled={reminder.isLoading}
        />
        {showRemoveButton && <button onClick={handleRemove}>Remove</button>}
      </form>
    </div>
  );
};

export default ReminderForm;
