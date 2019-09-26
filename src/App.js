import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      descriptions: "",
      duedate: new Date(),
      status: "todo",
      enable: false,
      error: false
    };
  }

  myChangeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
      this.setState({ [name]: value });  
  };

  mySubmitHandler = event => {
    event.preventDefault();
    this.setState({ enable: true });
    console.log(this.state);
  };

  handleDateChange = event => {
    console.log(event);
  };

  render() {
    const isEnable = this.state.enable;
    let area;
    if (isEnable === true) {
      area = (
        <div>
          <h2>Title : {this.state.title}</h2>
          <h3>Descriptions : {this.state.descriptions}</h3>
          <h3>Due Date: {this.state.duedate.toDateString()}</h3>
          <h3>Status: {this.state.status}</h3>
        </div>
      );
    } else {
      area = <div></div>;
    }
    return (
      <div>
        <form onSubmit={this.mySubmitHandler} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Title"
            name="title"
            onChange={this.myChangeHandler}
            margin="normal"
          />
          <p></p>
          <TextField
            id="standard-name"
            label="Descriptions"
            name="descriptions"
            onChange={this.myChangeHandler}
            margin="normal"
          />
          <p></p>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              name="duedate"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={this.state.duedate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <p></p>
          <InputLabel>Status</InputLabel>
          <Select
            value={this.state.status}
            name="status"
            onChange={this.myChangeHandler}
          >
            <MenuItem value={"todo"}>ToDo</MenuItem>
            <MenuItem value={"ongoing"}>Ongoing</MenuItem>
            <MenuItem value={"stalled"}>Stalled</MenuItem>
            <MenuItem value={"done"}>Done</MenuItem>
          </Select>
          <p></p>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
        {error}
        {area}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form className="ToDoForm"></Form>
      </header>
    </div>
  );
}

export default App;
