import WeekDays from "./WeekDays";
import MonthDays from "./MonthDays";
import AddReminder from "./AddReminder";
import EditReminder from "./EditReminder";
import useCalendar from "../state/useCalendar";

const Calendar = ({}) => {
  const {
    isEditing,
    isAdding,
    setReminder,
    editingReminder,
    removeReminder,
    openEditReminder,
    days,
    reminders,
    addReminder,
    editReminder,
    openAddReminder,
    removeAllReminders,
    getWeather,
  } = useCalendar();

  return (
    <>
      <WeekDays />

      <MonthDays
        days={days}
        onDayClick={openAddReminder}
        reminders={reminders}
        onReminderClick={openEditReminder}
        onRemoveAll={removeAllReminders}
      />

      {isAdding && (
        <AddReminder
          setReminder={setReminder}
          reminder={editingReminder}
          onAdd={addReminder}
          getWeather={getWeather}
        />
      )}

      {isEditing && (
        <EditReminder
          setReminder={setReminder}
          reminder={editingReminder}
          onEdit={editReminder}
          getWeather={getWeather}
          onRemove={removeReminder}
        />
      )}
    </>
  );
};

export default Calendar;
