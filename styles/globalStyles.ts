// styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #F5F7FA;
    color: #323F4B;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: #0A2540;
  }

  a {
    text-decoration: none;
    color: #18A0FB;
  }

  button {
    font-family: 'Poppins', sans-serif;
    background-color: #FF6D00;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #FF4500;
    }
  }
`;
