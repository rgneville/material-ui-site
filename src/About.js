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
    list:{
      fontFamily: "Roboto",
      lineHeight: '2rem',
      textAlign: "left"
    }
  })

  const About = () => {
    const classes = styles();

    return (
        <div>
          <ThemeProvider theme={theme}>
            <NavBar />
            <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.littleSpace} color="primary">
                 About us
              </Typography>
              <div className={classes.littleSpace}></div>
              <ul className={classes.list}>
                <li>Family Run</li>
                <li>Over 30 years in house experience in the bathroom industry</li>
                <li>Years of building relationships with suppliers which has allowed us to earn a bigger discount that we can pass down directly to the supplier</li>
                <li>Deal both with the trade and the general public</li>
                <li>We can design, supply and install. Or we have the option of supply only</li>
                <li>Years of working in the trade has allowed us to recognise the best tradesmen in the local area.</li>
                <li>Supply quality products from the leading manufactures in the bathroom industry.</li>
                <li>Regularly use CAD (computer aided design) to help customers visualise their bathroom</li>
              </ul>
              <Typography variant="h4" className={classes.littleSpace} color="primary">
                 Our Showroom and Suppliers
              </Typography>
              <Typography variant="body1" className={classes.littleSpace} color="primary">
              See the quality of our goods for yourself by visiting our showroom. Whether you need a whole new bathroom or just a new shower, we’re here to offer all the interior design and technical advice you could possibly require.
              
              <br />
              <br />
              Once you choose our services, we come to visit your home free of charge and our planner will draw up a diagram of your proposed new bathroom. Just sit back and let us take the required measurements to ensure all your new fittings fit perfectly into your existing space. There is no upper or lower limit to what we can supply, so either get in touch or come to see us for all your bathroom needs.

              <br />
              <br />
              Contact Aqua Bathrooms Direct Ltd for first-rate bathroom suppliers that offers the secret for a relaxing and indulgent new bathroom.

              </Typography>
              <ul className={classes.list}>
                <li>We use a large range of suppliers that allows us to get the right product for our customers at the right price</li>
                <li>We also use a large range of suppliers to help us in keeping up with the latest trends and fashions in the bathroom industry</li>
                <li>For customers looking for a traditional bathroom suite we use suppliers such as Heritage, Burlingtons, Armitage Shanks, Twyfords and others. These suppliers are the market leaders in this sector of the bathroom industry.</li>
                <li>For customers looking for a modern/contemporary bathroom we would use suppliers such as Britton Bathrooms, Tavistock, Higlife Bathrooms, Eastbrook and many others. These suppliers have a large range of products from small square wall hung basin to large simplistic freestanding baths.</li>
                <li>We offer a wide range of shower enclosures from a contract 6mm glass enclosure to a Merlyn 10mm glass enclosure. We also offer everything in between.</li>
                <li>Large choice of brassware and showers, from Highlife Bathrooms to Grohe.</li>
              </ul>
            </div>
            <div className={classes.bigSpace}>
            <Footer />
            </div>
          </ThemeProvider>
        </div>
      );
  }
   
  export default About;

  
