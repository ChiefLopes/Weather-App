import Icons from "../Icons";
import "./weather.scss";

const Weather = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
        <Icons.search width="15px" height="15px" />
      </div>
    </div>
  );
};

export default Weather;
