import ReminderForm from "./ReminderForm";

const EditReminder = ({ onEdit, onRemove, ...props }) => {
  return (
    <ReminderForm
      showRemoveButton
      actionTitle="Edit"
      onSubmit={onEdit}
      onRemove={onRemove}
      {...props}
    />
  );
};

export default EditReminder;
