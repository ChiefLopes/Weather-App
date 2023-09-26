
import sunnyIcon from "../assets/Images/Sunny2.webp";
import rainIcon from "../assets/Images/Rain.jpeg";
import humidIcon from "../assets/Images/Humid.jpeg";
import snowIcon from "../assets/Images/Snow.png";
import cloudyIcon from "../assets/Images/cloud.png";
import windIcon from "../assets/Images/wind.png";
import searchIcon from "../assets/Images/Search.png";
import drizzleIcon from "../assets/Images/drizzle.png";

const Icons = {
    sun: (props) => <img src={sunnyIcon} alt="Sun" {...props} />,
  rain: (className) => <img src={rainIcon} alt="Rain" className={className} />,
  humid: () => <img src={humidIcon} alt="Humid" />,
  snow: () => <img src={snowIcon} alt="Snow" />,
  cloudy: () => <img src={cloudyIcon} alt="Cloudy" />,
  wind: () => <img src={windIcon} alt="Wind" />,
    search: (className) => <img src={searchIcon} alt="Search" className={className} />,
  drizzle: () => <img src={drizzleIcon} alt="Drizzle" />,
};

export default Icons;
