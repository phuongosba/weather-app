import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";
import DetailCard from "./components/DetailCard";
import Search from "./components/Search";
import TotalCard from "./components/TotalCard";
import axios from "axios";
import { Grid } from "@mui/material";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const APP_URL = process.env.REACT_APP_WEATHER_URL;
  const ICON_URL = process.env.REACT_APP_IMAGE_URL;

  const [noData, setNoData] = useState("Search City!");
  const [userSearch, setUserSearch] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState("");

  const handleOnChange = (e) => {
    setUserSearch(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getWeather(userSearch);
  };

  const getWeather = async (location) => {
    const searchValue =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;

    const url = `${APP_URL + searchValue}&units=metric&cnt=5&appid=${API_KEY}`;
    try {
      let res = await axios.get(url);
      let data = res && res.data ? res.data : [];
      let iconUrl = `${ICON_URL + data.list[0].weather[0].icon}@2x.png`;
      setWeatherData(data);
      setWeatherIcon(iconUrl);
      console.log(weatherIcon);
      setCity(`${data.city.name}, ${data.city.country}`);
    } catch (e) {
      setNoData("Location Not Found!");
    }
  };

  return (
    <Box className="container">
      <Search
        className="search__container"
        userSearch={userSearch}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      {weatherData.length === 0 ? (
        <div className="nodata__container">
          <h1>{noData}</h1>
        </div>
      ) : (
        <>
          <DetailCard
            city={city}
            weatherData={weatherData}
            weatherIcon={weatherIcon}
          />
          <hr />
          <Grid
            container
            m={2}
            justifyContent="space-around"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            {weatherData.list.map((item, index) => {
              return (
                <TotalCard className="detail_total" key={index} item={item} />
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default App;
