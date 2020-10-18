import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PropTypes from "prop-types";

const CalendarHeader = ({ value, setValue }) => {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="header">
      <div
        className="previous"
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        {!thisMonth() ? <ArrowBackIosIcon /> : null}
      </div>
      <div className="current">
        {currMonthName()} {currYear()}
      </div>
      <div className="next" onClick={() => setValue(nextMonth())}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

CalendarHeader.propTypes = {
    value: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
};
export default CalendarHeader;
