import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, useBreakpointValue } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App'
import { Global, css } from '@emotion/react';


const Fonts = () => {
  const slidePercentage = useBreakpointValue({ base: 0, md: 0, lg: 10, xl: 10 });

  return <Global
    styles={css`
      @font-face {
        font-family: 'Netflix Sans';
        src: url('/fonts/NetflixSans-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        
      }
      @font-face {
        font-family: 'Netflix Sans';
        src: url('/fonts/NetflixSans-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Netflix Sans';
        src: url('/fonts/NetflixSans-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
      }
      @font-face {
        font-family: 'Netflix Sans';
        src: url('/fonts/NetflixSans-Bold.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
      }
      .carousel .slide {
        margin-right: ${slidePercentage}px;
        margin-left: ${slidePercentage}px;
        text-align: unset;
      }
      .carousel .slide img{
        width: unset;
        min-width: unset;
      }
     
    `}
  />
};



const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};


const colors = {
  white: '#fff',
  blue: "#1B4E7A",
  gray: '#4e5f74'

}
const fonts = {
  heading: "Netflix Sans",
  body: "Netflix Sans",
}

const theme = extendTheme({ colors, fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
