const ReminderForm = ({ reminder = {}, setReminder, onSubmit, onClick }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("value", value, typeof value);
    setReminder({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(reminder);
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
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default ReminderForm;
