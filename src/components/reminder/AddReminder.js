import ReminderForm from "./ReminderForm";
import { useReminder } from "../../state/reminder/context";
const AddReminder = ({ ...props }) => {
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
      {...props}
    />
  );
};

export default AddReminder;
