import { useReducer } from "react";
import reducer from "./reducer";
import * as CALENDAR from "./types";

const useCalendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { editingReminder, days, reminders, status } = state;

  const setReminder = (value) => {
    dispatch({ type: CALENDAR.SET_REMINDER_VALUE, payload: { value } });
  };

  const openEditReminder = (reminder) => {
    dispatch({ type: CALENDAR.OPEN_EDIT_REMINDER, payload: { reminder } });
  };

  const editReminder = (reminder) => {
    dispatch({ type: CALENDAR.EDIT_REMINDER, payload: { reminder } });
  };

  const openAddReminder = (date) => {
    dispatch({ type: CALENDAR.OPEN_ADD_REMINDER, payload: { date } });
  };

  const addReminder = (reminder) => {
    dispatch({ type: CALENDAR.ADD_REMINDER, payload: { reminder } });
  };

  const removeReminder = (reminder) => {
    dispatch({ type: CALENDAR.REMOVE_REMINDER, payload: { reminder } });
  };

  const removeAllReminders = (day) => {
    dispatch({ type: CALENDAR.REMOVE_ALL_REMINDERS, payload: { day } });
  };

  const cancelEditing = () => {
    dispatch({ type: CALENDAR.CANCEL_EDITING });
  };

  return {
    days,
    reminders,
    isEditing: !!editingReminder.date && status === "EDIT",
    isAdding: !!editingReminder.date && status === "ADD",
    setReminder,
    editingReminder,
    removeReminder,
    openEditReminder,
    addReminder,
    editReminder,
    openAddReminder,
    cancelEditing,
    removeAllReminders,
  };
};

const initialState = {
  editingReminder: {
    date: null,
  },
  days: new Array(35).fill(null).map((_, idx) => idx + 1),
  reminders: {},
};

export default useCalendar;
