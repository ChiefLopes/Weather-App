import Icons from "../Icons";
import { useRef, useState, useEffect } from "react";
import "./weather.scss";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // Use null as the initial state
    const cityInput = useRef();
 

  const api_key = "36c2731e80bedca7edd17caae5f275ce";

  useEffect(() => {
    // Only fetch weather data if the city is not empty
      if (city.trim() === "") return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}` 
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  const handleSearch = () => {
    // Get the value from the input using the ref
    const inputCity = cityInput.current.value.trim();
    setCity(inputCity);
  };



  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          ref={cityInput}
          className="cityInput"
          placeholder="Search city"
        />
        <span className="search">
          <Icons.search className="search-icon" onClick={handleSearch} />
        </span>
      </div>
      {weather && (
        <div>
          <Icons.rain className="rain" />
        </div>
      )}
      {weather && (
        <div className="weather-desc">
          <div className="weather-temp">{weather.main.temp}°C</div>
                  <div className="weather-location">{weather.name}, {weather.sys.country}</div>
        </div>
      )}
      {weather && (
        <div className="data-container">
          <div className="element">
            <Icons.humid className="humid" />
            <div className="data">
              <div className="rate">{weather.main.humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <Icons.wind className="humid" />
            <div className="data">
              <div className="rate">{weather.wind.speed}km/hr</div>
              <div className="text">Wind-speed</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
