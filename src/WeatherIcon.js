import React from "react";
import { WeatherSvg } from "weather-icons-animated";

const codeMapping = {
  "clear-sky-day": "sunny",
  "clear-sky-night": "clear-night",
  "few-clouds-day": "partlycloudy",
  "few-clouds-night": "partlycloudy",
  "scattered-clouds-day": "cloudy",
  "scattered-clouds-night": "cloudy",
  "broken-clouds-day": "cloudy",
  "broken-clouds-night": "cloady",
  "shower-rain-day": "pouring",
  "shower-rain-night": "pouring",
  "rain-day": "rainy",
  "rain-night": "rainy",
  "thunderstorm-day": "lightning-rainy",
  "thunderstorm-night": "lightning-rainy",
  "snow-day": "snowy",
  "snow-night": "snowy",
  "mist-day": "fog",
  "mist-night": "fog",
};

export default function WeatherIcon(props) {
  return (
    <WeatherSvg
      state={codeMapping[props.code]}
      width={props.width}
      height={props.height}
    />
  );
}
