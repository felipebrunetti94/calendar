import { useReminder } from "../../state/reminder/context";
import AddReminder from "./AddReminder";
import EditReminder from "./EditReminder";

const ReminderWrapper = ({ children }) => {
  const { showEdit, showAdd, cancelEditing } = useReminder();
  return (
    <>
      {children}
      {showAdd && <AddReminder isOpen={showAdd} onClose={cancelEditing} />}
      {showEdit && <EditReminder isOpen={showEdit} onClose={cancelEditing} />}
    </>
  );
};

export default ReminderWrapper;
