import React, { Component } from "react";
import PropTypes from "prop-types";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

class ReminderResume extends Component {
  state = {};

  deleteReminder = () => {
    this.props.deleteReminder(this.props.info.id);
  };
  render() {
    const { date, time, title, city, color } = this.props.info;
    return (
      <div className="lst-rmsm">
        <p className="t">
          <FiberManualRecordIcon style={{ color: color }} />
          {title}
        </p>
        <p className="d">
          {city} {date} {time}
        </p>
      </div>
    );
  }
}

ReminderResume.propTypes = {
  info: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

export default ReminderResume;
