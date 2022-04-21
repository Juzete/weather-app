import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useActions } from "../../hooks/useActions";
import { weatherSelector } from "../../store/selectors";
import dateBuilder from "../../utils/dateBuilder";
import { setWeatherBackground } from "../../utils/setWeatherBackground";
import { setWeatherIcon } from "../../utils/setWeatherIcon";
import {
  DateWrapper,
  FlipButton,
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

const ForwardSide = ({ setIsFlipped, isSelfWeather, setIsSelfWeather }) => {
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
      setIsSelfWeather("search");
    } else if (e.key === "Enter" && null != false) {
      setCurrentWeatherToView("search");
      setIsSelfWeather("search");
    }
  };

  const onChangeSearchHandler = (e) => setCity(e.target.value);

  const onFlipButtonClickHandler = () => setIsFlipped(true);

  useEffect(() => {
    if (coords.lat !== null && !allData.selfLocationOneDayWeather) {
      fetchSelfLocationOneDayWeather(coords.lat, coords.lon);
      fetchSelfLocationFiveDaysWeather(coords.lat, coords.lon);
    }
  }, [coords]);

  useEffect(() => {
    if (allData.selfLocationOneDayWeather && isSelfWeather === "self")
      setCurrentWeatherToView("self");
  }, [isSelfWeather]);

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
    <PageWrapper
      background={setWeatherBackground(
        allData.currentWeatherOneDay.weather[0].main
      )}
    >
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
              <img
                src={setWeatherIcon(
                  allData.currentWeatherOneDay.weather[0].main
                )}
                height="170px"
                alt="weather icon"
              />
            </WeatherWrapper>
            <FlipButton onClick={onFlipButtonClickHandler}>
              Look more
            </FlipButton>
          </div>
        ) : (
          ""
        )}
      </Main>
    </PageWrapper>
  );
};

export default ForwardSide;
