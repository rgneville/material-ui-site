import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';

import Hero from './components/assets/hero.jpg';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BuildIcon from '@material-ui/icons/Build';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ComputerIcon from '@material-ui/icons/Computer';

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
  hero:{
    marginTop: "2.5rem",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    filter: "grayscale(50%)",
    objectFit: "cover",
    objectPosition: "20% 10%"
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <img src={Hero} alt="Some legs in a bath" className={classes.hero} />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.littleSpace} color="primary">
             Stylish and Bespoke Bathrooms
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            High quality bathroom furniture and showers in Gloucester. We stock all the latest designs from the UK's best manufacturers. Come and see our showroom today!
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<BathtubIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Latest Styles" btnTitle="Show me More" />
          <Grid icon={<BuildIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Installation" btnTitle="Show me More"/>
          <Grid icon={<LocalShippingIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Local Delivery" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="CAD Designed" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
        <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
