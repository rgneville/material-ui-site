import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#000000",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
    h6: {
      fontWeight: 400,
      lineHeight: '2rem',
    },
  },
});

  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center",
    ['@media (max-width:905px)']: { 
      fontSize: "25",
      width: "90%"    }
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
    map:{
      width: "240px",
      height: "250px",
    ['@media (max-width:905px)']: {
      width: "80%" }
    },
  })

  const Map = () => {
    return (
      <GoogleMap 
        defaultZoom={15} 
        defaultCenter={{ lat: 51.841547, lng: -2.165404 }} 
      >
        <Marker position={{ lat: 51.841547, lng: -2.165404 }} />
      </GoogleMap>
    )
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  const Contact = () => {
    const classes = styles();

    return (
        <div>
          <ThemeProvider theme={theme}>
            <NavBar />
            <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.littleSpace} color="primary">
                 Get in touch
              </Typography>
            </div>
            <div className={classes.wrapper}>
              <Typography variant="body1" className={classes.littleSpace} color="primary">
                Thank you for taking the time to visit our website and we hope that we can be of service to you.  Should you have any questions or queries or would like some further information then <b>please use the "Get A Quote Today" button above</b> and one of our dedicated team will get back in contact with you ASAP.
              </Typography>
              <Typography variant="h4" className={classes.littleSpace} color="primary">
                 Opening Hours
              </Typography>
              <Typography variant="body1" className={classes.littleSpace} color="primary">
                Monday – Friday     8.30am – 5.30pm
                <br />
                Saturday                 9.00am – 2.30pm
                <br />
                Sunday                   CLOSED
              </Typography>
              <Typography variant="body1" className={classes.littleSpace} color="primary">
                T: 01452 613221
              </Typography>
              <Typography variant="body1" color="primary">
                E: aquabathroomsdirectltd@gmail.com
              </Typography>
              <Typography variant="body1" className={classes.littleSpace} color="primary">
                Aqua Bathrooms Direct Ltd
                <br />
                11 Bamel Way, Gloucester, Gloucestershire GL3 4BH
              </Typography>
              <div style={{ width: "64vw", height: "50vh", marginTop: "2.5rem" }}>
                <WrappedMap 
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }}/>}
                  containerElement={<div style={{ height: `100%` }}/>}
                  mapElement={<div style={{ height: `100%` }}/>}
                />
              </div>
              </div>
            <div className={classes.bigSpace}>
            <Footer />
            </div>
          </ThemeProvider>
        </div>
      );
  }
   
  export default Contact;