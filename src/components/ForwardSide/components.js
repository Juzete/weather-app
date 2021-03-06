import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0 auto;
  background-image: url("${({ background }) => background}");
  background-size: cover;
  background-position: bottom;
  transition: 0.4 ease-out;
  max-width: 460px;
  height: 100vh;
  max-height: 760px;
  min-width: 400px;
  border-radius: 32px 32px 32px 32px;
`;

export const Main = styled.main`
  height: 100vh;
  max-height: 760px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(100, 100, 100, 0.3)
  );
  padding: 25px;

  border-radius: 32px 32px 32px 32px;
`;

export const SearchBox = styled.div`
  width: 100%;
  margin: 0 0 75px;
`;

export const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 15px;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px 16px 16px 16px;
  margin-top: 5px;

  box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

  color: #313131;
  font-size: 20px;

  transition: 0.4 ease;

  &:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export const LocationWrapper = styled.div``;

export const Location = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

export const DateWrapper = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
`;

export const WeatherWrapper = styled.div`
  text-align: center;
`;

export const Temperature = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px auto;
  border-radius: 16px;

  padding: 15px 25px;

  color: #fff;

  font-size: 102px;
  font-wight: 900;

  text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
  text-align: center;
`;

export const Weather = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

export const FlipButton = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  padding: 15px;
  margin: 0 auto;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px 16px 16px 16px;
  margin-top: 5px;

  box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

  color: #313131;
  font-size: 20px;

  transition: 0.4 ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
  }
`;
