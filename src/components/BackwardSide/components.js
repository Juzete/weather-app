import styled from "styled-components";

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
