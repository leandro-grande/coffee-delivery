import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.background}
  }

  header {
    font-family: 'Baloo 2', sans-serif;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem; 
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }

  a { 
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  span {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;