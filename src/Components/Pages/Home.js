import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import "typeface-nunito";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'nunito',
      'serif',
    ].join(','),
},});
export default function Home(props) {
  return (
   <ThemeProvider theme={theme}>
      <Typography component="h4" variant="h4"  gutterBottom>
     Welcome To Ludo Admin Dashboard 
    </Typography>
   </ThemeProvider>
  );
}

Home.propTypes = {
  children: PropTypes.node,
};