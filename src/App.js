import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Samira26"
            target="_blank"
            rel="noreferrer"
          >
            Samira Mohamed{" "}
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Samira26/project-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
