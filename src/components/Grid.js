import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link'
import CustomBtn from './CustomBtn';

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5rem 0 5rem",
    },
    item: {
        paddingTop: "1rem"
    }
})

const Grid = (props) => {
    const { icon, title, btnTitle, link } = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h6">{title}</Typography>
            <div className={classes.item}>
            <Link href={link} color="inherit">
                <CustomBtn txt={btnTitle}/>
            </Link>
            </div>
        </div>
    )
}
 
export default Grid;