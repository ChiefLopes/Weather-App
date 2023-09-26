import Icons from "../Icons";
import "./weather.scss";

const Weather = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
        <Icons.search className="search" />
      </div>
    </div>
  );
};

export default Weather;
