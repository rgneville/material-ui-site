import { React, useState } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import project1 from './components/assets/project1.png';
import project2 from './components/assets/project2.png';
import project3 from './components/assets/project3.png';
import project1second from './components/assets/project1second.png';
import project2second from './components/assets/project2second.png';
import project3second from './components/assets/project3second.png';

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
      ['@media (max-width:780px)']: { 
        flexDirection: "column"
       } 
    },
    projectContainer:{
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      margin: "10px;"
    },
    projectImage:{
      width: "300px",
      margin: "10px;"
    }
  })

  const Projects = () => {
    const [ projectList ] = useState([
        {
            title: "Brushed Brass",
            image: project1,
            secondImage: project1second,
            copy: "Brushed brass is really popular at the moment. We think this is going to look great!",
            id: 0
        },
        {
            title: "CAD Wetroom",
            image: project2,
            secondImage: project2second,
            copy: "We recently drew this up for one of our customers. Can't wait to see what it looks like!",
            id: 1
        },
        {
            title: "Black Out Features",
            image: project3,
            secondImage: project3second,
            copy: "Stand out from the crowd! Great use of black taps and showers to create an ultra modern feel in this family bathroom.",
            id: 2
        },
    ]);

    const classes = styles();

    return (
        <div>
          <ThemeProvider theme={theme}>
            <NavBar />
            <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.littleSpace} color="primary">
                 Recent Projects
              </Typography>
              <div className={classes.littleSpace}>
              {projectList.map(project => {
                  return (
                    <div key={project.id} className={classes.projectContainer}>
                        <Typography variant="h5" color="primary">
                        {project.title}
                        </Typography>
                        <Typography variant="body1" color="primary" style={{ padding: "8px" }}>
                        {project.copy}
                        </Typography>
                        <div className={classes.grid}>
                          <img src={project.image} alt={project.title} className={classes.projectImage}/>
                          <img src={project.secondImage} alt="Secondary" className={classes.projectImage}/>
                        </div>
                    </div>)
              })}
              </div>
            </div>
            <div className={classes.littleSpace}>
            <Footer />
            </div>
          </ThemeProvider>
        </div>
      );
  }
   
  export default Projects;