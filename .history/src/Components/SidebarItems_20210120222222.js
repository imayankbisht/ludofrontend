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
import UserManagement from './Pages/UserManagement'
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

 
  {
    route:'/Dashboard',
    name: "DASHBOARD",
    icon:<DashboardIcon/>,
    component: Home,
    layout: "/admin"
  },
  {
    route:'/BalanceSheet',
    name: "BALANCESHEET",
    icon:<ShoppingCartIcon/>,
    component: BalanceSheet,
    layout: "/admin"
  },
  {
    route:'/roomManagement',
    name: "ROOMMANAGEMENT",
    icon:<PeopleIcon/>,
    component: UserManagement,
    layout: "/admin"
  },
  {
    
    name: "REPORTS",
    icon:<BarChartIcon/>
  },
  {
    name: "PLAYER HISTORY"
  },
  {
    name: "DEPOSIT",
    icon:<AssignmentIcon/>
  },
  {
    name: "RAKE",
    icon:<AssignmentIcon/>
  },
  {
    name: "REFUND",
    icon:<AssignmentIcon/>
  },
  {
    name: "WITHDRAWL",
    icon:<AssignmentIcon/>
  },

];
