import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [weather, setWeather] = useState({});

  const onSearchHandler = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setWeather(response.data);
          setCity("");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
  }, [coords]);

  return (
    <PageWrapper>
      <Main>
        <SearchBox>
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={onSearchHandler}
          />
        </SearchBox>
        {typeof weather.main != "undefined" ? (
          <div>
            <LocationWrapper>
              <Location>
                {weather.name}, {weather.sys.country}
              </Location>
              <DateWrapper>{dateBuilder(new Date())}</DateWrapper>
            </LocationWrapper>
            <WeatherWrapper>
              <Temperature>{Math.round(weather.main.temp)}°С</Temperature>
              <Weather>{weather.weather[0].main}</Weather>
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
