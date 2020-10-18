import React from "react";
import PropTypes from "prop-types";

function Weather({ result }) {
  const { name, main, weather } = result;

  if (!name) return null;

  const kelvin = 273.15;


  const ricon = (
    <img
      src={"http://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png"}
      alt={name}
    />
  );
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <p>
          {name} weather forecast : {parseInt(main.temp - kelvin, 10)}{" "}
          <span>&#x2103;</span>{" "}
          {weather[0].main} - {weather[0].description}
          {ricon}
        </p>
      </div>
    </div>
  );
}
Weather.propTypes = {
    result: PropTypes.string.isRequired,
  };

export default Weather;
