import React from "react";
import { useState } from "react";

export default function TemperatueUnit(props) {
  const [unit, setUnit] = useState("metric");

  function displayImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function displayMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="TemperatureUnit">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={displayImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let imperial = props.celsius * (9 / 5) + 32;
    return (
      <div className="TemperatureUnit">
        <span className="temperature">{Math.round(imperial)}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={displayMetric}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
