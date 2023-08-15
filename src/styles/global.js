import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // normalize styles
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus, :active {
    outline: none;
  }

  a:focus, a:active {
    outline: none;
  }

  nav, footer, header, aside {
    display: block;
  }

  html, body {
    height: 100%;
    width: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  }
  
  // add fonts
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&family=Yellowtail&display=swap');
  
  html {
    // set default font
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.65em;
    color: ${props => props.theme.colors.text};
  }
`;