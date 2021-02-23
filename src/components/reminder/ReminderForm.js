import { format, parseISO } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, TextField, Button, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ErrorMessage from "../error/ErrorMessage";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    height: 600,
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ReminderForm = ({
  reminder = {},
  setReminder,
  onSubmit,
  isOpen,
  onClose,
  showRemoveButton = false,
  showDate = false,
  onRemove,
  actionTitle,
  getWeather,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReminder({ [name]: value });
  };

  const handleDateChange = (value) => {
    setReminder({ date: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(reminder);
  };

  const handleRemove = (event) => {
    event.preventDefault();
    onRemove(reminder);
  };

  const handleBlur = () => {
    if (reminder.city && reminder.date) {
      getWeather(reminder.city);
    }
  };
  const dateFormat = "PPPP";

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.paper}>
          <Typography>
            {`${reminder.title || "No title"}, `}
            {reminder.date && format(reminder.date, dateFormat)}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                {showDate && (
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date"
                    label="Reminder date"
                    value={reminder.date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                )}
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  data-testid="input-title"
                  value={reminder.title || ""}
                  onChange={handleChange}
                  maxLength="30"
                  name="title"
                  label="Title"
                />
              </Grid>
              <Grid item>
                <TextField
                  data-testid="input-description"
                  value={reminder.description || ""}
                  onChange={handleChange}
                  name="description"
                  label="Description"
                />
              </Grid>
              <Grid item>
                <label htmlFor="time">Time</label>
                <input
                  name="time"
                  type="time"
                  value={reminder.time || "12:00"}
                  onChange={handleChange}
                  data-testid="input-time"
                />
              </Grid>
              <Grid item>
                <label htmlFor="color">color</label>
                <input
                  name="color"
                  type="color"
                  value={reminder.color || "#ffffff"}
                  onChange={handleChange}
                  data-testid="input-color"
                />
              </Grid>
              <Grid container item>
                <Grid item>
                  <TextField
                    data-testid="input-city"
                    value={reminder.city || ""}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="city"
                    label="City"
                  />
                </Grid>
                <Grid item>
                  {reminder.error && <ErrorMessage error={reminder.error} />}
                  {reminder.isLoading && (
                    <span>Looking for the weather forecast...</span>
                  )}
                  {reminder.weather && (
                    <TextField
                      readOnly
                      data-testid="input-weather"
                      value={reminder.weather || ""}
                      name="weather"
                      label="Weather"
                    />
                  )}
                </Grid>
              </Grid>
              <Grid container item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  value={actionTitle}
                  disabled={reminder.isLoading}
                >
                  {actionTitle}
                </Button>
                {showRemoveButton && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleRemove}
                  >
                    Remove
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    </Modal>
  );
};

export default ReminderForm;
