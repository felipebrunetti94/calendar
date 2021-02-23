import { format, startOfWeek, addDays } from "date-fns";

const WeekDays = ({ currentMonth }) => {
  const dateFormat = "EEEE";
  const startDate = startOfWeek(currentMonth);
  const days = new Array(7).fill(startDate);

  return (
    <div className="days row">
      {days.map((day, idx) => (
        <div className="col col-center" key={addDays(day, idx)}>
          {format(addDays(day, idx), dateFormat)}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
