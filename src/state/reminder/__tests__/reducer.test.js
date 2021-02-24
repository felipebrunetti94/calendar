import initialState from "../initialState";
import reducer from "../reducer";

describe("State :: Reminder :: reducer", () => {
  it("handle default action", () => {
    expect(reducer("state", {})).toEqual("state");
  });

  it("handle SET_REMINDER_VALUE", () => {
    const state = { editingReminder: {} };
    const action = {
      type: "SET_REMINDER_VALUE",
      payload: { value: { key: "value" } },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: { key: "value" },
    });
  });

  it("handle OPEN_EDIT_REMINDER", () => {
    const state = { editingReminder: {} };
    const action = {
      type: "OPEN_EDIT_REMINDER",
      payload: { reminder: "reminder" },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: "reminder",
      status: "EDIT",
    });
  });

  it("handle EDIT_REMINDER", () => {
    const state = { editingReminder: {}, reminders: [{ id: "id" }] };
    const action = {
      type: "EDIT_REMINDER",
      payload: { reminder: { title: "reminder", id: "id" } },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: initialState.editingReminder,
      reminders: [{ title: "reminder", id: "id" }],
      status: "",
    });
  });

  it("handle OPEN_ADD_REMINDER", () => {
    const state = { editingReminder: {} };
    const action = {
      type: "OPEN_ADD_REMINDER",
      payload: { date: "date" },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: { date: "date" },
      status: "ADD",
    });
  });

  it("handle ADD_REMINDER", () => {
    const state = { editingReminder: {}, reminders: [{ id: "1" }] };
    const action = {
      type: "ADD_REMINDER",
      payload: { reminder: { id: "2" } },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: initialState.editingReminder,
      reminders: [{ id: "1" }, { id: "2" }],
      status: "",
    });
  });

  it("handle REMOVE_ALL_REMINDERS", () => {
    const state = { reminders: [{ date: "1" }, { date: "2" }] };
    const action = {
      type: "REMOVE_ALL_REMINDERS",
      payload: { date: "2" },
    };
    expect(reducer(state, action)).toEqual({
      reminders: [{ date: "1" }],
    });
  });

  it("handle REMOVE_REMINDER", () => {
    const state = { reminders: [{ id: "1" }, { id: "2" }] };
    const action = {
      type: "REMOVE_REMINDER",
      payload: { reminder: { id: "1" } },
    };
    expect(reducer(state, action)).toEqual({
      reminders: [{ id: "2" }],
      status: "",
    });
  });

  it("handle CANCEL_EDITING", () => {
    const state = { editingReminder: {} };
    const action = {
      type: "CANCEL_EDITING",
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: initialState.editingReminder,
      status: "",
    });
  });

  it("handle WEATHER_REQUEST", () => {
    const state = { editingReminder: { isLoading: false, error: "error" } };
    const action = {
      type: "WEATHER_REQUEST",
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: { isLoading: true, error: null },
    });
  });

  it("handle WEATHER_REQUEST_SUCCESS", () => {
    const state = { editingReminder: { isLoading: false, error: "error" } };
    const action = {
      type: "WEATHER_REQUEST_SUCCESS",
      payload: { weather: "weather" },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: { isLoading: false, error: null, weather: "weather" },
    });
  });

  it("handle WEATHER_REQUEST_ERROR", () => {
    const state = { editingReminder: { isLoading: true, error: null } };
    const action = {
      type: "WEATHER_REQUEST_ERROR",
      payload: { error: "error" },
    };
    expect(reducer(state, action)).toEqual({
      editingReminder: { isLoading: false, error: "error", weather: "" },
    });
  });
});
