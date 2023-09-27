import Icons from "../Icons";
import { useRef } from "react";
import "./weather.scss";

const Weather = () => {
    const cityInput = useRef();
    
    const addValueToInput = () => {
      if (cityInput.current) {
        cityInput.current.value = ""; 
      }
    };
    
 
    
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" ref={cityInput} className="cityInput" placeholder="Search city" />{addValueToInput()}
        <span className="search">
          <Icons.search className="search-icon" />
        </span>
      </div>
      <div>
        <Icons.rain className="rain" />
      </div>
      <div className="weather-desc">
        <div className="weather-temp">23°c</div>
        <div className="weather-location">London</div>
      </div>
      <div className="data-container">
        <div className="element">
          <Icons.humid className="humid" />
          <div className="data">
            <div className="rate">5%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <Icons.wind className="humid" />
          <div className="data">
            <div className="rate">18km/hr</div>
            <div className="text">Wind-speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Weather;
