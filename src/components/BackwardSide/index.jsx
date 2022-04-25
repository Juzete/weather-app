import React, { useEffect, useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/selectors";
import { setWeatherBackground } from "../../utils/setWeatherBackground";
import { Button, Main, PageWrapper, Title } from "./components";
import WeatherList from "./WeatherList";
import CalendarEventsList from "./CalendarEventsList";

const BackwardSide = ({ setIsFlipped }) => {
  const onFlipButtonClickHandler = () => setIsFlipped(false);
  const allData = useSelector(weatherSelector);
  const [isAuth, setIsAuth] = useState(false);

  const handleItemClick = (name) => (e) => {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick()
        .then(() => {
          setIsAuth(true);
        })
        .catch((e) => {
          setIsAuth(false);
        });
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
      setIsAuth(false);
    }
  };

  useEffect(() => {}, [isAuth]);

  return (
    <PageWrapper
      background={setWeatherBackground(
        allData.currentWeatherOneDay.weather[0].main
      )}
    >
      <Main>
        <div>
          <Title>Weather forecast for 5 days</Title>
          <WeatherList />
          {isAuth ? (
            <>
              <Title>Events</Title>
              <CalendarEventsList />
            </>
          ) : null}

          <div>
            {isAuth ? (
              <Button onClick={handleItemClick("sign-out")}>Sign-out</Button>
            ) : (
              <Button onClick={handleItemClick("sign-in")}>Sing-in</Button>
            )}

            <Button onClick={onFlipButtonClickHandler}>Return back</Button>
          </div>
        </div>
      </Main>
    </PageWrapper>
  );
};

export default BackwardSide;
