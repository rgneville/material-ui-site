import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
        fontSize: "medium",
        lineHeight: '1.5rem',
      },
    },
  });

  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
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
        width: "250px",
        height: "250px",
      },
  })

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
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Thank you for taking the time to visit our website and we hope that we can be of service to you.  Should you have any questions or queries or would like some further information then please use the contact form below and one of our dedicated team will get back in contact with you ASAP.
              </Typography>
              <Typography variant="h4" className={classes.littleSpace} color="primary">
                 Opening Hours
              </Typography>
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Monday – Friday     8.30am – 5.30pm
                <br />
                Saturday                 9.00am – 2.30pm
                <br />
                Sunday                   CLOSED
              </Typography>
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Aqua Bathrooms Direct Ltd
                11 Bamel Way
                Gloucester, Gloucestershire GL3 4BH
              </Typography>
              <Typography variant="h5" color="primary">
                T: 01452 613221
              </Typography>
              <Typography variant="h5" color="primary">
                E: aquabathroomsdirectltd@gmail.com
              </Typography>
              </div>
            <div className={classes.bigSpace}>
            <Footer />
            </div>
          </ThemeProvider>
        </div>
      );
  }
   
  export default Contact;