import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div className="row mt-3">
        <div className="col-3 weather-details">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <span className="condition text-capitalize">
                {props.data.condition}
              </span>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.icon} />
        </div>
      </div>
    </div>
  );
}
