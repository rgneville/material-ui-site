import { React, useState } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import project1 from './components/assets/project1.png';
import project2 from './components/assets/project2.png';
import project3 from './components/assets/project3.png';

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
        lineHeight: '1.25rem',
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
    projectContainer:{
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      margin: "10px;"
    },
    projectImage:{
      width: "250px",
      margin: "10px;"
    }
  })

  const Projects = () => {
    const [ projectList ] = useState([
        {
            title: "Brushed Brass",
            image: project1,
            copy: "Brushed brass is really popular at the moment, we're being asked by more customers to use this every week. We think it looks great here!",
            id: 0
        },
        {
            title: "CAD Wetroom",
            image: project2,
            copy: "We recently drew this up for one of our customers. Can't wait to see what it looks like!",
            id: 1
        },
        {
            title: "Stand out from the crowd",
            image: project3,
            copy: "Great use of black taps and showers to create an ultra modern feel in this family bathroom.",
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
                 Recent projects
              </Typography>
              <div className={classes.littleSpace}>
              {projectList.map(project => {
                  return (
                    <div className={classes.projectContainer}>
                        <Typography variant="h6" color="primary">
                        {project.title}
                        </Typography>
                        <Typography variant="h5" color="primary">
                        {project.copy}
                        </Typography>
                        <img src={project.image} alt={project.title} className={classes.projectImage}/>
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