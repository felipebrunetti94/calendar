import * as CALENDAR from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case CALENDAR.SET_REMINDER_VALUE:
      return {
        ...state,
        editingReminder: { ...state.editingReminder, ...action.payload.value },
      };
    case CALENDAR.OPEN_EDIT_REMINDER:
      return {
        ...state,
        editingReminder: action.payload.reminder,
        status: "EDIT",
      };
    case CALENDAR.EDIT_REMINDER:
      return {
        ...state,
        editingReminder: {},
        reminders: {
          [state.editingReminder.date]: state.reminders[
            state.editingReminder.date
          ].map((reminder) =>
            reminder.message === state.editingReminder.message
              ? state.editingReminder
              : reminder
          ),
        },
        status: "",
      };
    case CALENDAR.OPEN_ADD_REMINDER:
      return {
        ...state,
        editingReminder: {
          date: action.payload.date,
        },
        status: "ADD",
      };
    case CALENDAR.ADD_REMINDER:
      return {
        ...state,
        editingReminder: {},
        reminders: {
          [state.editingReminder.date]: state.reminders[
            state.editingReminder.date
          ]
            ? [
                ...state.reminders[state.editingReminder.date],
                action.payload.reminder,
              ]
            : [action.payload.reminder],
        },
        status: "",
      };
    case CALENDAR.REMOVE_ALL_REMINDERS:
      return {
        ...state,
        reminders: {
          ...state.reminders,
          [action.payload.day]: undefined,
        },
      };
    case CALENDAR.REMOVE_REMINDER:
      return {
        ...state,
        status: "",
        reminders: {
          ...state.reminders,
          [action.payload.reminder.date]: state.reminders[
            action.payload.reminder.date
          ].filter(
            (reminder) => reminder.message !== action.payload.reminder.message
          ),
        },
      };
    case CALENDAR.CANCEL_EDITING:
      return {
        ...state,
        editingReminder: {},
        status: "",
      };
    default:
      return state;
  }
};

export default reducer;
