import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Cashout() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={12} md={4} lg={9}>
            <Title >Recent Cashout  <span></span></Title>

            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            <Chip label="today" style={{backgroundColor:'#4782da'}} />
            </Grid>
        </Grid>
     
     
      <Typography component="p" variant="h4">
        $2,034.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      on 17 jan, 2020
      </Typography>
      <div >
        <Link color="textSecondary" href="#" onClick={preventDefault}>
        <span style={{color:"#f44336"}}> +12%</span>  View balance
        </Link>
      </div>
    </React.Fragment>
  );
}