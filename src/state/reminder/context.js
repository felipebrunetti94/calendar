import { createContext, useMemo, useReducer, useContext } from "react";
import initialState from "./initialState";
import reducer from "./reducer";
import * as REMINDER from "./types";
import getWeather from "../../app/getWeather";
import createReminder from "../../app/createReminder";
import { isSameDay } from "date-fns";

const ReminderContext = createContext(null);

const ReminderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    const { editingReminder, days, reminders, status } = state;

    const setReminder = (value) => {
      dispatch({ type: REMINDER.SET_REMINDER_VALUE, payload: { value } });
    };

    const openEditReminder = (reminder) => {
      dispatch({ type: REMINDER.OPEN_EDIT_REMINDER, payload: { reminder } });
    };

    const editReminder = (reminder) => {
      dispatch({ type: REMINDER.EDIT_REMINDER, payload: { reminder } });
    };

    const openAddReminder = (date) => {
      dispatch({ type: REMINDER.OPEN_ADD_REMINDER, payload: { date } });
    };

    const addReminder = (reminder) => {
      dispatch({
        type: REMINDER.ADD_REMINDER,
        payload: { reminder: createReminder(reminder) },
      });
    };

    const removeReminder = (reminder) => {
      dispatch({ type: REMINDER.REMOVE_REMINDER, payload: { reminder } });
    };

    const removeAllReminders = (date) => {
      dispatch({ type: REMINDER.REMOVE_ALL_REMINDERS, payload: { date } });
    };

    const cancelEditing = () => {
      dispatch({ type: REMINDER.CANCEL_EDITING });
    };

    const getBy = (date) =>
      reminders.filter((reminder) => isSameDay(reminder.date, date));

    return {
      getBy,
      days,
      reminders,
      showEdit: status === "EDIT",
      showAdd: status === "ADD",
      setReminder,
      editingReminder,
      removeReminder,
      openEditReminder,
      addReminder,
      editReminder,
      openAddReminder,
      cancelEditing,
      removeAllReminders,
      getWeather: (city) => {
        dispatch({ type: REMINDER.WEATHER_REQUEST });
        return getWeather(city, {
          onSuccess: (weather) =>
            dispatch({
              type: REMINDER.WEATHER_REQUEST_SUCCESS,
              payload: { weather },
            }),
          onError: (error) =>
            dispatch({
              type: REMINDER.WEATHER_REQUEST_ERROR,
              payload: { error },
            }),
        });
      },
    };
  }, [state]);

  return (
    <ReminderContext.Provider value={value}>
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminder = () => useContext(ReminderContext);

export default ReminderProvider;
