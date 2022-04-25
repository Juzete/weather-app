import React from "react";
import { useSelector } from "react-redux";
import { weatherSelector } from "../../store/selectors";
import { setWeatherBackground } from "../../utils/setWeatherBackground";
import { FlipButton, Main, PageWrapper } from "./components";
import WeatherList from "./WeatherList";

const BackwardSide = ({ setIsFlipped }) => {
  const onFlipButtonClickHandler = () => setIsFlipped(false);
  const allData = useSelector(weatherSelector);

  return (
    <PageWrapper
      background={setWeatherBackground(
        allData.currentWeatherOneDay.weather[0].main
      )}
    >
      <Main>
        <div>
          <WeatherList />
          <FlipButton onClick={onFlipButtonClickHandler}>
            Return back
          </FlipButton>
        </div>
      </Main>
    </PageWrapper>
  );
};

export default BackwardSide;
