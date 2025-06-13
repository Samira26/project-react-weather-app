import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <p>Monday, June 10, 8:00 AM</p>
        <div className="row mt-3">
          <div className="col-3 weather-details">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-3">
            <ul>
              <li>
                <span className="condition text-capitalize">
                  {weatherData.condition}
                </span>
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.icon} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "df24oeedc433a37t0bf85c483b145ecb";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
