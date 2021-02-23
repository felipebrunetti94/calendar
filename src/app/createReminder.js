import { v4 as uuid } from "uuid";

const createReminder = (reminder) => {
  return { ...reminder, id: uuid() };
};

export default createReminder;
