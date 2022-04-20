import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'montserrat', sans-serif;
    vertical-align: middle;
}

.page-wrapper {
    padding-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
`;
