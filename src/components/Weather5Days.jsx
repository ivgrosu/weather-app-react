import { useContext } from "react";
import LoadingIcons from "react-loading-icons";
import { AppContext } from "../context/AppContext";
import Weather5DaysSingleDay from "./Weather5DaysSingleDay";

const Weather5Days = () => {
  const { cityData, error, loading } = useContext(AppContext);

  return loading ? (
    <div className="spinner">
      <LoadingIcons.Circles fill="#df6914" />
    </div>
  ) : (
    <div className="main-container">
      {cityData && (
        <div>
          <h4 className="title-container">
            Forecast for <span className="city"> {cityData[0].name}</span>
            <span className="country"> {cityData[0].country}</span>
          </h4>
          <div className="single-day-container">
            {cityData.map((item, index) => {
              return <Weather5DaysSingleDay key={index} item={item} />;
            })}
          </div>
        </div>
      )}

      {error && <div className="error">{error}, Try Again!</div>}
    </div>
  );
};

export default Weather5Days;
