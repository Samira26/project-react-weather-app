import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function formattedDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function formattedDate() {
    let now = new Date(props.data.time * 1000);
    let date = now.getDate();
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[now.getMonth()];

    return `${month} ${date}`;
  }

  return (
    <div>
      <div className="WeatherForecast-day">
        {formattedDay()}
        <br />
        <span className="WeatherForecast-date">{formattedDate()}</span>
      </div>
      <WeatherIcon code={props.data.condition.icon} width={60} height={60} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {maxTemperature()}
        </span>{" "}
        <span className="WeatherForecast-temperatures-min">
          {minTemperature()}
        </span>
        <div className="WeatherForecast-description text-capitalize">
          {props.data.condition.description}
        </div>
      </div>
    </div>
  );
}
