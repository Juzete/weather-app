import React from "react";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../../store/selectors";
import { setWeatherIcon } from "../../../utils/setWeatherIcon";
import { ListItem, ListWrapper, Wrapper } from "./components";

const WeatherList = () => {
  const allData = useSelector(weatherSelector);

  const printWeatherList = () => {
    const listToShow = [];
    for (let i = 0; i < 5; i++) {
      const element = allData.currentWeatherFiveDays.list[i];
      listToShow.push(
        <ListItem key={element.main.temp + element.wind.speed}>
          <Wrapper>{Math.round(element.main.temp)}°С</Wrapper>
          <Wrapper>{element.weather[0].main}</Wrapper>
          <Wrapper>
            <img
              src={setWeatherIcon(element.weather[0].main)}
              height="50px"
              alt="weather icon"
            />
          </Wrapper>
        </ListItem>
      );
    }
    return listToShow;
  };

  return <ListWrapper>{printWeatherList()}</ListWrapper>;
};

export default WeatherList;
