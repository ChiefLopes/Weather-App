import sunnyIcon from "../assets/Images/Sunny2.webp";
import rainIcon from "../assets/Images/Rain2.png";
import humidIcon from "../assets/Images/humid.png";
import snowIcon from "../assets/Images/Snow.png";
import cloudyIcon from "../assets/Images/cloud.png";
import windIcon from "../assets/Images/wind.png";
import searchIcon from "../assets/Images/Search.png";
import drizzleIcon from "../assets/Images/drizzle.png";

const Icons = {
  sun: (props) => <img src={sunnyIcon} alt="Sun" {...props} />,
  rain: (props) => (
    <img src={rainIcon} alt="Rain" className={props.className} />
  ),
  humid: (props) => (
    <img src={humidIcon} alt="Humid" className={props.className} />
  ),
  snow: () => <img src={snowIcon} alt="Snow" />,
  cloudy: () => <img src={cloudyIcon} alt="Cloudy" />,
  wind: (props) => (
    <img src={windIcon} alt="Wind" className={props.className} />
  ),
  search: (props) => (
    <img
      src={searchIcon}
      alt="Search"
      className={props.className}
      onClick={props.onClick}
    />
  ),
  drizzle: () => <img src={drizzleIcon} alt="Drizzle" />,
};

export default Icons;
