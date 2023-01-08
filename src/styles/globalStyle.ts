import { createGlobalStyle } from 'styled-components';
import { colors, devices, centerContent } from './variables';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(0, 0, 0, 0.87);
    background-color: ${colors.background_clear};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body, #root {
    
  } 

  .app {    
    ${centerContent()}
    
    flex-direction: column;
    gap: 20px;
    height: 100vh;
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
