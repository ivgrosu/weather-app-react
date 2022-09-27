import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import IMAGES from "../assets/icons";

const Weather5DaysSingleDay = ({ item }) => {
  const { getDate } = useContext(AppContext);
  const navigate = useNavigate();

  const getTempMax = (item) => {
    const tempMaxList = [];
    item.timeList.forEach((i) => {
      tempMaxList.push(i.tempMax);
    });
    return Math.round(Math.max(...tempMaxList));
  };
  const getTempMin = (item) => {
    const tempMinList = [];
    item.timeList.forEach((i) => {
      tempMinList.push(i.tempMin);
    });
    return Math.round(Math.min(...tempMinList));
  };
  const getImgDay = (item) => {
    const imgCounts = {};
    const imgDayList = [];
    item.timeList.forEach((i) => {
      if (i.imgWeather[-1] === "n") return;
      imgDayList.push(i.imgWeather);
    });
    imgDayList.forEach((img) => {
      imgCounts[img] = (imgCounts[img] || 0) + 1;
    });
    const valuesImg = Object.values(imgCounts);
    const maxValue = Math.max(...valuesImg);
    const imgDay = Object.keys(imgCounts).find(
      (key) => imgCounts[key] === maxValue
    );
    return imgDay;
  };
  const getImgDesc = (item) => {
    let imgDesc = "";
    item.timeList.map((i) => {
      if (i.imgWeather === getImgDay(item)) imgDesc = i.description;
      return imgDesc;
    });
    return imgDesc;
  };

  const getToday = () => {
    const newDate = new Date(Date.now());
    let date, month, year;
    date = newDate.getDate();
    month = newDate.getMonth() + 1;
    year = newDate.getFullYear();
    date = date.toString().padStart(2, "0");
    month = month.toString().padStart(2, "0");
    return `${date}-${month}-${year}`;
  };

  return (
    <div className="single-day">
      <p className="date">
        {getDate(item) === getToday() ? "Today" : getDate(item)}
      </p>
      <div className="degrees">
        <p className="temp-values">
          T-max{" "}
          <span className="temp">
            {" "}
            {getTempMax(item)}
            <span className="symbol">°C</span>
          </span>
        </p>
        <p className="temp-values">
          T-min{" "}
          <span className="temp">
            {" "}
            {getTempMin(item)}
            <span className="symbol">°C</span>
          </span>
        </p>
      </div>
      <div className="icon-description">
        <img src={IMAGES[`i_${getImgDay(item)}`]} alt="weather-icon" />
        <p className="description">{getImgDesc(item)}</p>
      </div>
      <button
        className="btn"
        onClick={() => navigate(`detail/${getDate(item)}`)}
      >
        Details
      </button>
    </div>
  );
};
export default Weather5DaysSingleDay;
