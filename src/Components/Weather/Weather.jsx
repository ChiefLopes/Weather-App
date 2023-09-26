import Icons from "../Icons";
import "./weather.scss";

const Weather = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
        <span className="search">
          <Icons.search className="search-icon" />
        </span>
          </div>
          <div>
            <Icons.rain className="rain" />
          </div>
    </div>
  );
};

export default Weather;
