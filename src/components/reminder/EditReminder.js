import ReminderForm from "./ReminderForm";
import { useReminder } from "../../state/reminder/context";

const EditReminder = () => {
  const {
    editingReminder,
    setReminder,
    getWeather,
    editReminder,
    removeReminder,
  } = useReminder();
  return (
    <ReminderForm
      showRemoveButton
      showDate
      actionTitle="Edit"
      onSubmit={editReminder}
      onRemove={removeReminder}
      setReminder={setReminder}
      getWeather={getWeather}
      reminder={editingReminder}
    />
  );
};

export default EditReminder;
