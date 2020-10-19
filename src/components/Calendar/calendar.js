import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../style.css";
import BuildCalendar from "./Build";
import dayStyles, { beforeToday, numberdayStyles} from "./Styles";
import CalendarHeader from "./CalendarHeader";
import ListRemindersResume from "./ListRemindersResume";
import PropTypes from "prop-types";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  const [reminders, setReminders] = useState([]);

  const filterRemainders = (day) => {
    const remindersD = reminders.filter((reminder) =>
      moment(reminder.datetime).isSame(day, "day")
    );

    return remindersD;
  };

  useEffect(() => {
    setCalendar(BuildCalendar(value));
    const remindersS = localStorage.getItem("reminders");
    if (remindersS) {
      setReminders(JSON.parse(remindersS));
    }
  }, [value]);

  return (
    <div className="container">
      <div className="calendar">
        <CalendarHeader value={value} setValue={onChange} />
        <div className="body">
          <div className="day-names">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((d) => (
              <div className="week" key={d}>{d}</div>
            ))}
          </div>
          {calendar.map((week) => (
            <div key={week}>
              {week.map((day) => (
                <div
                key={day}
                  className="day"
                  onClick={() => !beforeToday(day) && onChange(day)}
                >
                  <div className={dayStyles(day, value)}>
                    <div className={numberdayStyles(day, value)}>
                      {day.format("D").toString()}
                      <ListRemindersResume reminders={filterRemainders(day)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Calendar;
