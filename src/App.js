import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';

import Hero from './components/assets/hero.png';
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
      fontSize: 45,
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
  ['@media (max-width:905px)']: { 
    fontSize: "25",    },
  imageContainer: {
    marginTop: "1.5rem",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  overlay:{
    marginTop: "2.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -370%)",
    color: "white"
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  hero:{
    marginTop: "1.5rem",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
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
        <div className={classes.imageContainer}>
          <img src={Hero} alt="Hero" className={classes.hero} />
        </div>
        <div className={classes.wrapper}>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            High quality bathroom furniture and showers in Gloucester. We stock all the latest designs from the UK's best manufacturers. Come and see our showroom today!
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<BathtubIcon style={{fill: "#7050f2", height:"125", width:"125"}}/>}  title="Latest Styles" btnTitle="Show me More" link="/projects" />
          <Grid icon={<BuildIcon style={{fill: "#8375bf", height:"125", width:"125"}}/>} title="Installation" btnTitle="Show me More" link="/about" />
          <Grid icon={<LocalShippingIcon style={{fill: "#645f78", height:"125", width:"125"}}/>}  title="Local Delivery" btnTitle="Show me More" link="/about" />
          <Grid icon={<ComputerIcon style={{fill: "#4b4954", height:"125", width:"125"}}/>}  title="CAD Designed" btnTitle="Show me More" link="/projects"/>
        </div>
        <div className={classes.bigSpace}>
        <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
