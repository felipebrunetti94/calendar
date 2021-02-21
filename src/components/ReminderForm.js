import ErrorMessage from "./ErrorMessage";

const ReminderForm = ({
  reminder = {},
  setReminder,
  onSubmit,
  onClick,
  showRemoveButton = false,
  onRemove,
  actionTitle,
  getWeather,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReminder({ [name]: value });
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

  return (
    <div onClick={onClick}>
      <h2>{reminder.date}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <input
          name="message"
          type="text"
          maxLength="30"
          value={reminder.message || ""}
          onChange={handleChange}
          data-testid="input-message"
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
