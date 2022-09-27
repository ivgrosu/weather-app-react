import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BsSearch } from "react-icons/bs";

const WeatherSearch = () => {
  const [searchCity, setSearchCity] = useState("");
  const { addCity } = useContext(AppContext);

  return (
    <div className="search-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCity(searchCity);
          setSearchCity("");
        }}
      >
        <input
          placeholder="Search city"
          value={searchCity}
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
        />
      </form>
      <button
        className="btn"
        onClick={() => {
          addCity(searchCity);
          setSearchCity("");
        }}
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default WeatherSearch;
