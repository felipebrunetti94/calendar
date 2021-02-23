import { useReminder } from "../../state/reminder/context";
import AddReminder from "./AddReminder";
import ReminderInfo from "./ReminderInfo";
import EditReminder from "./EditReminder";

const ReminderWrapper = ({ children }) => {
  const { showEdit, showAdd, showInfo } = useReminder();
  return (
    <>
      {children}
      {showAdd && <AddReminder />}
      {showEdit && <EditReminder />}
      {showInfo && <ReminderInfo />}
    </>
  );
};

export default ReminderWrapper;
