import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import "typeface-nunito";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
const theme = createMuiTheme({
 
  typography: {
      fontFamily: [
        'Nunito',
        'serif',
      ].join(','),
  },
});
export const mainListItems = (
  // <Box bgcolor="lightgray">
  <ThemeProvider theme={theme}>
  <div>
  
   <ListItem button>
      <ListItemIcon>
        <DashboardIcon  style={{ color: '#a8a8a8'}}/>
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}}  primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{ color: '#a8a8a8'}}/>
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}} primary="BalanceSheet" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: '#a8a8a8'}} />
      </ListItemIcon>
      <Link to="/UserManagement">
        B
        
      <ListItemText style={{ color: '#eeeeee'}} primary="RoomManagement" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{ color: '#a8a8a8'}} />
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}} primary="Reports" />
    </ListItem>
    <Divider />
    <ListSubheader style={{ color: '#eeeeee'}} inset>Player history</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{ color: '#a8a8a8'}} />
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}} primary="Deposit" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{ color: '#a8a8a8'}} />
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}} primary="Rake" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{ color: '#a8a8a8'}} />
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}} primary="Refund" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{ color: '#a8a8a8'}} />
      </ListItemIcon>
      <ListItemText style={{ color: '#eeeeee'}} primary="Withdrawl" />
    </ListItem>
   
    
  </div>
  </ThemeProvider>
  // </Box>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Player history</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Deposit" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Rake" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Refund" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Withdrawl" />
//     </ListItem>
//   </div>
// );