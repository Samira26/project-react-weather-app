import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <p>Monday, June 10, 8:00 AM</p>
      <div className="row mt-3">
        <div className="col-3 weather-details">
          <span className="temperature">17</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul>
            <li>Rain</li>
            <li>Humidity: 87%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="Rain"
          />
        </div>
      </div>
    </div>
  );
}
