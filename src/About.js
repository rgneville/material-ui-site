import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrightnessMediumOutlined } from '@material-ui/icons';

const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
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
        lineHeight: '2rem',
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
  })

  const About = () => {
    const classes = styles();

    return (
        <div>
          <ThemeProvider theme={theme}>
            <NavBar />
            <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.bigSpace} color="primary">
                 About us
              </Typography>
              <div className={classes.bigSpace}>
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Family Run
                <br />
                Over 30 years in house experience in the bathroom industry
                <br />
                Years of building relationships with suppliers which has allowed us to earn a bigger discount that we can pass down directly to the supplier
                <br />
                Deal both with the trade and the general public
                <br />
                We can design, supply and install. Or we have the option of supply only
                <br />
                Years of working in the trade has allowed us to recognise the best tradesmen in the local area.
                <br />
                Supply quality products from the leading manufactures in the bathroom industry.
                <br />
                Regularly use CAD (computer aided design) to help customers visualise their bathroom
              </Typography>
              </div>
            </div>
            <div className={classes.bigSpace}>
            <Footer />
            </div>
          </ThemeProvider>
        </div>
      );
  }
   
  export default About;

  
