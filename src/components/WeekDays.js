const WeekDays = ({}) => {
  return (
    <ol>
      {WEEKDAYS.map((weekday) => (
        <li key={weekday}>{weekday}</li>
      ))}
    </ol>
  );
};

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default WeekDays;
