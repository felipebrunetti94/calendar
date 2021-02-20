import Day from "./Day";

const MonthDays = ({ size }) => {
  const days = new Array(size).fill({
    reminders: [],
    weather: "xx",
    date: "000",
  });
  return (
    <ol>
      {days.map((day) => (
        <Day day={day} />
      ))}
    </ol>
  );
};

export default MonthDays;
