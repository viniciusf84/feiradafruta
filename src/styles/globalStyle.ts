import { createGlobalStyle } from 'styled-components';
import { colors, devices } from './variables';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;    
    
    background-color: ${colors.background_clear};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  } 


  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }  

  .text-center {
    text-align: center;
  }

  .icon-wrapper {
    margin-bottom: 0;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 16px;

    @media ${devices.tablet} {
      padding: 0 32px;
    }
  }
  
`;
