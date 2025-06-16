import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "df24oeedc433a37t0bf85c483b145ecb";
  let units = "metric";
  let city = props.cityForecast;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            Mon
            <br />
            <span className="WeatherForecast-date">16 June</span>
          </div>
          <WeatherIcon code="clear-sky-day" width={60} height={60} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">27°</span>{" "}
            <span className="WeatherForecast-temperatures-min">9°</span>
            <div className="WeatherForecast-description">Clear Sky</div>
          </div>
        </div>
      </div>
    </div>
  );
}
