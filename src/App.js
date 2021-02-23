import ReminderWrapper from "./components/reminder/ReminderWrapper";
import Calendar from "./components/calendar/Calendar";
import ReminderProvider from "./state/reminder/context";

const App = () => {
  return (
    <ReminderProvider>
      <ReminderWrapper>
        <Calendar />
      </ReminderWrapper>
    </ReminderProvider>
  );
};

export default App;
