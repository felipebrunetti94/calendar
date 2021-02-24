import initialState from "./initialState";
import * as REMINDER from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case REMINDER.SET_REMINDER_VALUE:
      return {
        ...state,
        editingReminder: { ...state.editingReminder, ...action.payload.value },
      };
    case REMINDER.OPEN_EDIT_REMINDER:
      return {
        ...state,
        editingReminder: action.payload.reminder,
        status: "EDIT",
      };
    case REMINDER.EDIT_REMINDER:
      const updateReminder = (reminder) =>
        reminder.id === action.payload.reminder.id
          ? action.payload.reminder
          : reminder;
      return {
        ...state,
        editingReminder: initialState.editingReminder,
        reminders: state.reminders.map(updateReminder),
        status: "",
      };
    case REMINDER.OPEN_ADD_REMINDER:
      return {
        ...state,
        editingReminder: {
          ...state.editingReminder,
          date: action.payload.date,
        },
        status: "ADD",
      };
    case REMINDER.ADD_REMINDER:
      return {
        ...state,
        editingReminder: initialState.editingReminder,
        reminders: [...state.reminders, action.payload.reminder],
        status: "",
      };
    case REMINDER.REMOVE_ALL_REMINDERS:
      const filterByDate = (reminder) => reminder.date !== action.payload.date;
      return {
        ...state,
        reminders: state.reminders.filter(filterByDate),
      };
    case REMINDER.REMOVE_REMINDER:
      const filterReminders = (reminder) =>
        reminder.id !== action.payload.reminder.id;
      return {
        ...state,
        status: "",
        reminders: state.reminders.filter(filterReminders),
      };
    case REMINDER.CANCEL_EDITING:
      return {
        ...state,
        editingReminder: initialState.editingReminder,
        status: "",
      };
    case REMINDER.WEATHER_REQUEST:
      return {
        ...state,
        editingReminder: {
          ...state.editingReminder,
          isLoading: true,
          error: null,
        },
      };
    case REMINDER.WEATHER_REQUEST_SUCCESS:
      return {
        ...state,
        editingReminder: {
          ...state.editingReminder,
          isLoading: false,
          weather: action.payload.weather,
          error: null,
        },
      };
    case REMINDER.WEATHER_REQUEST_ERROR:
      return {
        ...state,
        editingReminder: {
          ...state.editingReminder,
          isLoading: false,
          error: action.payload.error,
          weather: "",
        },
      };
    default:
      return state;
  }
};

export default reducer;
