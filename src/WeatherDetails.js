import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatueUnit from "./TemperatureUnit";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div className="row mt-3">
        <div className="col-4 weather-details">
          <TemperatueUnit celsius={props.data.temperature} />
        </div>
        <div className="col-4">
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
        <div className="col-4">
          <WeatherIcon code={props.data.icon} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
