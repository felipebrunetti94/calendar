import { format } from "date-fns";
import Reminders from "../reminder/Reminder";

const Day = ({ day, dayClass }) => {
  const dateFormat = "d";
  const formattedDate = format(day, dateFormat);

  return (
    <div className={`col cell ${dayClass}`}>
      <Reminders
        day={day}
        getDate={() => <span className="number">{formattedDate}</span>}
      />
    </div>
  );
};

export default Day;
