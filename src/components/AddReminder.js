import ReminderForm from "./ReminderForm";

const AddReminder = ({ onAdd, ...props }) => {
  return <ReminderForm onSubmit={onAdd} actionTitle="Add" {...props} />;
};

export default AddReminder;
