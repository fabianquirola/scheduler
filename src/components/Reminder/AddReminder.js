import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import moment from "moment";
import Header from "../shared/Header";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

class AddReminder extends Component {
  state = {
    error: false,
    id: this.props.reminder.id,
    title: this.props.reminder.title,
    date: this.props.reminder.date,
    time: this.props.reminder.time,
    datetime: this.props.reminder.datetime,
    city: this.props.reminder.city,
    country: this.props.reminder.country,
    color: this.props.reminder.color,
  };

  componentDidUpdate(prevProps) {
    // Compare props:

    if (this.props.reminder.id !== prevProps.reminder.id) {
      this.setState({
        id: this.props.reminder.id,
        title: this.props.reminder.title,
        date: this.props.reminder.date,
        time: this.props.reminder.time,
        datetime: this.props.reminder.datetime,
        city: this.props.reminder.city,
        country: this.props.reminder.country,
        color: this.props.reminder.color,
      });
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //refs

  titleRef = React.createRef();
  dateRef = React.createRef();
  timeRef = React.createRef();
  cityRef = React.createRef();
  colorRef = React.createRef();
  idRef = React.createRef();

  addNewReminder = (e) => {
    e.preventDefault();
    console.log("New Reminder click");

    const title = this.titleRef.current.value,
      city = this.cityRef.current.value,
      date = this.dateRef.current.value,
      time = this.timeRef.current.value,
      datetime = moment(date + " " + time),
      color =
        this.state.color !== "" ? this.state.color : this.props.reminder.color,
      country =
        this.state.country !== ""
          ? this.state.country
          : this.props.reminder.country,
      id = this.idRef.current.value;

    if (
      title === "" ||
      city === "" ||
      date === "" ||
      time === "" ||
      color === "" ||
      country === ""
    ) {

      this.setState({
        error: true,
      });
    } else {
     
      //object literal
      const newReminder = {
        id: uuid(),
        title,
        date,
        time,
        datetime,
        city,
        country,
        color,
      };

      //send to parent

      if (id) {
        console.log("Update and delete");
        this.props.updateReminder(newReminder, id);
      } else {
        this.props.createReminder(newReminder);
        console.log("new");
      }
      this.setState({
        error: false,
        countrySelection: "",
        id: 0,
        title: "",
        date: "",
        time: "",
        city: "",
        country: "",
        color: "",
      });

      //clear form

      e.currentTarget.reset();
    }
  };
  render() {
    // const {id,title,city,country,date,time,color} = this.props.reminder;
    const existError = this.state.error;

    return (
      <div className="card mt-5">
        <div className="card-body">
          <Header title="Reminder" />
          <form onSubmit={this.addNewReminder}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Title</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  ref={this.titleRef}
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  maxLength="30"
                  defaultValue={this.state.title}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">City</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  ref={this.cityRef}
                  type="text"
                  className="form-control"
                  placeholder="City Name"
                  defaultValue={this.state.city}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Country
              </label>
              <div className="col-sm-8 col-lg-10">
                <select
                  onChange={this.handleChange}
                  name="country"
                  className="form-control w-100"
                 // defaultValue={this.state.country}
                >
                  <option value="">Select a country</option>
                  <option value="US" selected={this.state.country === "US"}>
                    United States
                  </option>
                  <option value="MX" selected={this.state.country === "MX"}>
                    Mexico
                  </option>
                  <option value="AR" selected={this.state.country === "AR"}>
                    Argentina
                  </option>
                  <option value="CO" selected={this.state.country === "CO"}>
                    Colombia
                  </option>
                  <option value="CR" selected={this.state.country === "CR"}>
                    Costa Rica
                  </option>
                  <option value="ES" selected={this.state.country === "ES"}>
                    Spain
                  </option>
                  <option value="PE" selected={this.state.country === "PE"}>
                    Peru
                  </option>
                  <option value="EC" selected={this.state.country === "EC"}>
                    Ecuador
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  ref={this.dateRef}
                  type="date"
                  className="form-control"
                  placeholder="2020-10-01"
                  defaultValue={this.state.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  ref={this.timeRef}
                  type="time"
                  className="form-control"
                  placeholder="00:00"
                  defaultValue={this.state.time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Color</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  onChange={this.handleChange}
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  checked={this.state.color === "red"}
                />
                <label htmlFor="red">
                  <FiberManualRecordIcon style={{ color: 'red' }} /> Red
                </label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                  checked={this.state.color === "blue"}
                />
                <label htmlFor="blue">
                  <FiberManualRecordIcon style={{ color: 'blue' }} /> Blue
                </label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  id="yellow"
                  name="color"
                  value="yellow"
                  checked={this.state.color === "yellow"}
                />
                <label htmlFor="yellow">
                  <FiberManualRecordIcon style={{ color: 'yellow' }} />
                  Yellow
                </label>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-12">
                <input
                  type="hidden"
                  name="id"
                  id="id"
                  ref={this.idRef}
                  defaultValue={this.state.id}
                />
                <button type="submit" className="btn btn-success w-100">
                  {this.state.id !== 0 ? "Modify" : "Add"}
                </button>
              </div>
            </div>
          </form>
          {existError ? (
            <div className="alert alert-danger text-center">
              All fields are required
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

AddReminder.propTypes = {
  createReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  updateReminder: PropTypes.func.isRequired,
};

export default AddReminder;
