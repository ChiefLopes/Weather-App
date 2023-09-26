import Icons from "../Icons";


const Weather = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
              <div className="search">
                  <Icons.search />
        </div>
      </div>
    </div>
  );
};

export default Weather;
