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
      <Typography component="h2" variant="h6" color="textsecondary" gutterBottom>
     WELCOME TO L
    </Typography>
   </ThemeProvider>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};