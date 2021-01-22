import React from 'react';
import UserControl from '../UserControl';
import UserTable from '../UserTable';
import "typeface-nunito";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
 
  typography: {
      fontFamily: [
        'Nunito',
        'serif',
      ].join(','),
  },
});
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    height: 170,
  },
  typography:{
    marginLeft:'30px',
    fontWeight:'600'
    
  }
}));
export default function UserManagement(props){
  const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
          
        <div className="conatiner">
        <Typography component="h6" variant="h5"  className={classes.typography} gutterBottom>
         Room Management
       </Typography>
        <UserControl/>
        <UserTable/>
        </div>
        </ThemeProvider>
    )
}

