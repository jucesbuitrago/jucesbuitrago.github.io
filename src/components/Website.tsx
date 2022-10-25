import { Grid } from '@mui/material';
import React from 'react';
import classes from './Website.module.css';

const Website = () : JSX.Element => (
    <>
        <div className={classes.Main}>
            <Grid container direction="row" spacing={1}>
                <Grid className={classes.AsideContainer} item>
                    <p>ASIDE</p>
                </Grid>
                <Grid item xs>
                    <p>PAGE</p>
                </Grid>
            </Grid>
        </div>
        <div className={classes.MobileAppBar}>
            <p>BOTTOM APP BAR</p>
        </div>
    </>
);

export default Website;