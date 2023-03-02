import axios from "axios";

const API_KEY = "5a05d189ff418bfb62f095b77520c544";
const tempCelsius = "metric";

const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: API_KEY,
    units: tempCelsius,
  },
});
export default weatherAPI;
