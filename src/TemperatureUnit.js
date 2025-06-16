import React from "react";

export default function TemperatueUnit(props) {
  return (
    <div className="TemperatureUnit">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
