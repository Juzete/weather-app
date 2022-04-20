import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { weatherSelector } from "../../store/selectors";
import dateBuilder from "../../utils/dateBuilder";
import {
  DateWrapper,
  Location,
  LocationWrapper,
  Main,
  PageWrapper,
  SearchBar,
  SearchBox,
  Temperature,
  Weather,
  WeatherWrapper,
} from "./components";

const ForwardSide = () => {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [city, setCity] = useState("");
  const { fetchOneDayWeather } = useActions();
  const { fetchFiveDaysWeather } = useActions();
  const allData = useSelector(weatherSelector);

  const onSearchHandler = (e) => {
    if (e.key === "Enter") {
      fetchOneDayWeather(city);
      fetchFiveDaysWeather(city);
    }
  };

  const onChangeSearchHandler = (e) => setCity(e.target.value);

  const getSelfLocation = () => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setCoords({ lat: "err-latitude", lon: "err-longitude" });
        }
      );
    }
  };

  useEffect(() => {
    getSelfLocation();
  }, []);

  useEffect(() => {
    if (coords.lat !== null) {
      // axios
      //   // .get(
      //   //   `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_API_KEY}`
      //   // )
      //   // .get(
      //   //   `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_API_KEY}`
      //   // )
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [allData]);

  return (
    <PageWrapper>
      <Main>
        <SearchBox>
          <SearchBar
            type="text"
            placeholder={"Search..."}
            onChange={onChangeSearchHandler}
            value={city}
            onKeyDown={onSearchHandler}
          />
        </SearchBox>
        {allData.oneDayWeather !== null ? (
          <div>
            <LocationWrapper>
              <Location>
                {allData.oneDayWeather.name},{" "}
                {allData.oneDayWeather.sys.country}
              </Location>
              <DateWrapper>{dateBuilder(new Date())}</DateWrapper>
            </LocationWrapper>
            <WeatherWrapper>
              <Temperature>
                {Math.round(allData.oneDayWeather.main.temp)}°С
              </Temperature>
              <Weather>{allData.oneDayWeather.weather[0].main}</Weather>
            </WeatherWrapper>
          </div>
        ) : (
          ""
        )}
      </Main>
    </PageWrapper>
  );
};

export default ForwardSide;
