import React from 'react';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

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
    p: {
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


const Footer = () => {
  const classes = styles();
    return (
      <ThemeProvider theme={theme}>
      <footer>
          <BottomNavigation>
            <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
            <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
            <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
          </BottomNavigation>
          <div className={classes.wrapper}>
          <Typography variant="body1" color="primary">
          Aqua Bathrooms Direct Ltd
          11 Bamel Way
          Gloucester, Gloucestershire GL3 4BH
        </Typography>
        <Typography variant="body1" color="primary">
          T: 01452 613221
        </Typography>
        <Typography variant="body1" color="primary">
          E: aquabathroomsdirectltd@gmail.com
        </Typography>
        </div>
      </footer>
      </ThemeProvider>
     );
}
 
export default Footer;