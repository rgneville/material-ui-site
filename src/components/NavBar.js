import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../ABlogo.svg';
import { Toolbar, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo:{
        height: "80px",
        paddingRight: "20px",
        fill: "#4f25f7"
    },
    branding: {
        width: "40%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

const NavBar = () => {
    const classes = styles();
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
                <div className={classes.branding}>   
                    <img src={logo} alt="Logo" className={classes.logo}/>
                    <Typography variant="h6" className={classes.menuItem}>
                        <Link href="/" color="inherit" style={{ textDecoration: "none" }}>
                            Aqua Bathrooms Direct Ltd
                        </Link>
                    </Typography>
                </div>
                <Typography variant="h6" className={classes.menuItem}>
                   <Link href="/about" color="inherit" style={{ textDecoration: "none" }}>
                        About
                   </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Projects
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Get a quote today"/>
            </Toolbar>
    )
}
 
export default NavBar;