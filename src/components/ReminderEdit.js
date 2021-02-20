const ReminderEdit = ({ reminder = {}, setReminder }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReminder({ [name]: value });
  };
  return (
    <form>
      <label for="message">Message:</label>
      <input
        name="message"
        type="text"
        maxlength="30"
        value={reminder.message || ""}
        onChange={handleChange}
        data-testid="input-message"
      />
      <label for="time">Time</label>
      <input
        name="time"
        type="time"
        value={reminder.time || ""}
        onChange={handleChange}
        data-testid="input-time"
      />
      <label for="color">color</label>
      <input
        name="color"
        type="color"
        value={reminder.color || ""}
        onChange={handleChange}
        data-testid="input-color"
      />
      <label for="city">city</label>
      <input
        name="city"
        type="text"
        value={reminder.city || ""}
        onChange={handleChange}
        data-testid="input-city"
      />
    </form>
  );
};

export default ReminderEdit;
