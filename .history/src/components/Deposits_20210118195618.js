import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
            <Grid item xs={12} md={4} lg={9}>
            <Title >Total Deposits  </Title>

            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            <Chip label="today" style={{backgroundColor:'#4782da'}}/>
            </Grid>
        </Grid>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      on 17 jan, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
        <span style={{color="#4ca"}}> +14%</span>  View balance
        </Link>
      </div>
    </React.Fragment>
  );
}