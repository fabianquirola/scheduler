import React, { Component } from "react";
import ReminderResume from "./ReminderResume";
import PropTypes from "prop-types";
import moment from "moment";

class ListRemindersResume extends Component {
  state = {};
  render() {
    const reminders = this.props.reminders.sort(compare);

    function compare(a, b) {
      if (moment(a.datetime) < moment(b.datetime)) {
        return -1;
      }
      if (moment(a.datetime) > moment(b.datetime)) {
        return 1;
      }
      return 0;
    }

    return (
      <div className="lst-reminders">
        <div className="lst-reminders-content">
          {Object.keys(reminders).map((reminder) => (
            <ReminderResume key={reminder} info={reminders[reminder]} />
          ))}
        </div>
      </div>
    );
  }
}

ListRemindersResume.propTypes = {
  reminders: PropTypes.array.isRequired,
};

export default ListRemindersResume;
