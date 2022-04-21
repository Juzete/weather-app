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
  const [currentTime, setCurrentTime] = useState(() => new Date().getTime());
  const { fetchOneDayWeather } = useActions();
  const { fetchFiveDaysWeather } = useActions();
  const { fetchSelfLocationOneDayWeather } = useActions();
  const { fetchSelfLocationFiveDaysWeather } = useActions();
  const { setCurrentWeatherToView } = useActions();
  const { setWeatherTime } = useActions();
  const { refreshWeather } = useActions();
  const allData = useSelector(weatherSelector);

  const onSearchHandler = (e) => {
    if (
      e.key === "Enter" &&
      city.toLowerCase() !== allData.oneDayWeather?.name.toLowerCase()
    ) {
      fetchOneDayWeather(city);
      fetchFiveDaysWeather(city);
    } else if (e.key === "Enter" && null != false) {
      setCurrentWeatherToView("search");
    }
  };

  const onChangeSearchHandler = (e) => setCity(e.target.value);

  useEffect(() => {
    if (coords.lat !== null && !allData.selfLocationOneDayWeather) {
      fetchSelfLocationOneDayWeather(coords.lat, coords.lon);
      fetchSelfLocationFiveDaysWeather(coords.lat, coords.lon);
    }
  }, [coords]);

  useEffect(() => {
    if (allData.selfLocationOneDayWeather) setCurrentWeatherToView("self");
  }, [window.location, allData.selfLocationOneDayWeather]);

  useEffect(() => {
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

    const time = currentTime;
    if (!allData.weatherTime) setWeatherTime(time);
    if (currentTime - allData.weatherTime > 3600000 && allData.weatherTime) {
      refreshWeather();
      setWeatherTime(time);
    }
    getSelfLocation();
  }, []);

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
        {allData.currentWeatherOneDay !== null ? (
          <div>
            <LocationWrapper>
              <Location>
                {allData.currentWeatherOneDay.name},{" "}
                {allData.currentWeatherOneDay.sys.country}
              </Location>
              <DateWrapper>{dateBuilder(new Date())}</DateWrapper>
            </LocationWrapper>
            <WeatherWrapper>
              <Temperature>
                {Math.round(allData.currentWeatherOneDay.main.temp)}°С
              </Temperature>
              <Weather>{allData.currentWeatherOneDay.weather[0].main}</Weather>
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
