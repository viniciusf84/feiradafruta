import { createGlobalStyle } from 'styled-components';
import { colors, devices } from './variables';
import { rem } from 'polished';

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

  html {
    height: 100%;
  }
  
  body {
    min-height: 100%;
  }

  body > div {
    min-height: 100%;
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

  .brand {
		border-radius: 4px;
    color: ${colors.red};
		font-size: ${rem('26px')};
		font-weight: bold;
		text-shadow: ${colors.black} 1px 1px 1px;
		padding: 0 10px 0 0;
		height: 30px;
		line-height: 30px;
		width: 200px;

		@media ${devices.tablet} {
			width: 33%;
		}
	}
  
`;
