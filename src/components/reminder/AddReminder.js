import ReminderForm from "./ReminderForm";
import { useReminder } from "../../state/reminder/context";
const AddReminder = () => {
  const {
    editingReminder,
    setReminder,
    addReminder,
    getWeather,
  } = useReminder();

  return (
    <ReminderForm
      reminder={editingReminder}
      onSubmit={addReminder}
      setReminder={setReminder}
      getWeather={getWeather}
      actionTitle="Add"
    />
  );
};

export default AddReminder;
