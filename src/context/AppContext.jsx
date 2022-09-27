import { createContext, useState, useEffect } from "react";
import weatherAPI from "../apis/openWeatherAPI";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState("");

  const addCity = (cityName) => {
    setCityData(null);
    setError("");
    setCity(cityName);
  };

  const getDate = (item) => {
    const dateText = item.timeList[0].idText;
    const date = dateText.split(" ")[0].split("-");
    return `${date[2]}-${date[1]}-${date[0]}`;
  };

  useEffect(() => {
    if (!city) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await weatherAPI.get("forecast", {
          params: {
            q: city,
          },
        });

        const timeList = response.data.list.map((item) => {
          const newTime = new Date(
            item.dt * 1000 - 1000 * 60 * 60 * 3
          ).getHours();
          return {
            time: newTime,
            temperature: item.main.temp,
            tempMax: item.main.temp_max,
            tempMin: item.main.temp_min,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
            imgWeather: item.weather[0].icon,
            description: item.weather[0].main,
            idText: item.dt_txt,
            pressure: item.main.pressure,
          };
        });
        const data = {
          name: response.data.city.name,
          country: response.data.city.country,
          id: response.data.city.id,
          timeList,
        };
        const dataPerDay = [];
        const dayTime = (index = 21) => {
          const time = data.timeList.findIndex((item) => item.time === index);
          const day = { ...data, timeList: timeList.splice(0, time + 1) };
          dataPerDay.push(day);
        };
        for (let i = 0; i < 5; i++) {
          dayTime();
        }
        dataPerDay ? setCityData(dataPerDay) : setCityData(null);
      } catch (err) {
        console.log(err);
        if (err.response) setError(err.response.statusText);
      }
      setLoading(false);
    };

    let interval = setInterval(fetchData, 1000 * 60 * 15); //15min interval
    fetchData();
    return () => {
      clearInterval(interval);
    };
  }, [city]);

  return (
    <AppContext.Provider
      value={{ cityData, city, addCity, error, getDate, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};
