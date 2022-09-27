import Weather5Days from "../components/Weather5Days";
import WeatherSearch from "../components/WeatherSearch";

const WeatherOverview = () => {
  return (
    <>
      <WeatherSearch />
      <Weather5Days />
    </>
  );
};

export default WeatherOverview;
