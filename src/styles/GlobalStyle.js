// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Serif KR', serif;
    background-color: #dcdcdc; /* 연한 회색 배경 */
    color: #111;
    line-height: 1.8;
    font-size: 15px;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
