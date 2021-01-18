import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiChip: {
        // Name of the rule
        
          // Some CSS
          color: 'primary',
     
      },
    },
  });
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Refund() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
     <Grid container>
            <Grid item xs={12} md={4} lg={9}>
            <Title >Total Refund  <span></span></Title>

            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            <Chip label="today" color="#4782da" style={{backgroundColor:'#4782da'}} />
            </Grid>
        </Grid>
      <Typography component="p" variant="h4">
        $964.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </ThemeProvider>
    </React.Fragment>
  );
}