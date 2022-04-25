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
  padding: 15px;

  border-radius: 32px 32px 32px 32px;
  display: flex;
  align-items: center;
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
