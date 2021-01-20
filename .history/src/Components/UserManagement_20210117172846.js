import React from 'react';
import UserControl from '../Components/UserControl';
import UserTable from '../Components/UserTable';
import "typeface-nunito";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
 
  typography: {
      fontFamily: [
        'Nunito',
        'serif',
      ].join(','),
  },
});
export default function UserManagement(){
    return(
        <ThemeProvider theme={theme}>
        <div className="conatiner">
        <UserControl/>
        <UserTable/>
        </div>
        </ThemeProvider>
    )
}
