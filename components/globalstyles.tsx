import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'kalmansk';
    src: url('/fonts/Kalmansk-Regular.otf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  
  
  html {
    background-color: ${({ theme }) => theme.colors.background};
  }

  html,
  body {
    width: 100%;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: Michroma, kalmansk, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    scrollbar-color: ${({ theme }) => theme.colors.secondary} ${({ theme }) =>
	theme.colors.background};

/* 
    @media screen and (max-width: 600px) {
		  width: max-content;
	  } */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;
