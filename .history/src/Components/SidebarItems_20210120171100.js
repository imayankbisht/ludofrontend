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
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import BalanceSheet from './Pages/balanceSheet';
import UserManagement from './UserManagement'
import Home from './Pages/Home';
const theme = createMuiTheme({

  typography: {
    fontFamily: [
      'Nunito',
      'serif',
    ].join(','),
  },
});
export const SidebarItems = [

  // <ThemeProvider theme={theme}>
  // <div>

  //  <ListItem button>
  //     <ListItemIcon>
  //       <DashboardIcon  style={{ color: '#a8a8a8'}}/>
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}}  primary="Dashboard" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <ShoppingCartIcon style={{ color: '#a8a8a8'}}/>
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}} primary="BalanceSheet" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <PeopleIcon style={{ color: '#a8a8a8'}} />
  //     </ListItemIcon>
  //     <Link style={{ textDecoration:'none'}}to="/UserManagement">

  //     <ListItemText style={{ color: '#eeeeee'}} primary="RoomManagement" />
  //     </Link>
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <BarChartIcon style={{ color: '#a8a8a8'}} />
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}} primary="Reports" />
  //   </ListItem>
  //   <Divider />
  //   <ListSubheader style={{ color: '#eeeeee'}} inset>Player history</ListSubheader>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <AssignmentIcon style={{ color: '#a8a8a8'}} />
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}} primary="Deposit" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <AssignmentIcon style={{ color: '#a8a8a8'}} />
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}} primary="Rake" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <AssignmentIcon style={{ color: '#a8a8a8'}} />
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}} primary="Refund" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <AssignmentIcon style={{ color: '#a8a8a8'}} />
  //     </ListItemIcon>
  //     <ListItemText style={{ color: '#eeeeee'}} primary="Withdrawl" />
  //   </ListItem>


  // </div>
  // </ThemeProvider>
  {
    route:'/Dashboard',
    name: "Dashboard",
    icon:<DashboardIcon/>,
    component: Home,
    layout: "/admin"
  },
  {
    route:'/BalanceSheet',
    name: "BalanceSheet",
    icon:<ShoppingCartIcon/>,
    component: BalanceSheet,
    layout: "/admin"
  },
  {
    route:'/roomManagement',
    name: "RoomManagement",
    icon:<PeopleIcon/>,
    component: UserManagement,
    layout: "/admin"
  },
  {
    
    name: "Reports",
    icon:<BarChartIcon/>
  },
  {
    name: "Player History"
  },
  {
    name: "Deposit",
    icon:<AssignmentIcon/>
  },
  {
    name: "Rake",
    icon:<AssignmentIcon/>
  },
  {
    name: "Refund",
    icon:<AssignmentIcon/>
  },
  {
    name: "withdrawl",
    icon:<AssignmentIcon/>
  },

];
