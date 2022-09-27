import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import IMAGES from "../assets/icons";

const WeatherOneDay = () => {
  const { cityData, getDate } = useContext(AppContext);
  const { dayDate } = useParams();
  const day = cityData.find((item) => getDate(item) === dayDate);

  return (
    <div className="detail-container">
      {day && (
        <div>
          <h4 className="title-container">
            Weather in <span className="city"> {day.name}</span>
          </h4>
          <p className="date">{dayDate}</p>
          <div className="table-scroll">
            <table className="detail-data">
              <thead>
                <tr>
                  <th></th>
                  <th colSpan="2">Weather condition</th>
                  <th>Temperature, °C</th>
                  <th>Atmospheric pressure, hPa</th>
                  <th>Wind speed, m/s</th>
                  <th>Humidity, %</th>
                </tr>
              </thead>
              <tbody>
                {day.timeList.map((item, index) => (
                  <tr key={index}>
                    <td>{`${item.time}:00`.padStart(5, "0")}</td>
                    <td>
                      <img
                        src={IMAGES[`i_${item.imgWeather}`]}
                        alt="weather-icon"
                      />
                    </td>
                    <td>{item.description}</td>
                    <td>{Math.round(item.temperature)}°</td>
                    <td>{item.pressure}</td>
                    <td>{Math.round(item.windSpeed)}</td>
                    <td>{item.humidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherOneDay;
