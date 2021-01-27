import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import "typeface-nunito";
import { createMuiTheme } from '@material-ui/core/styles';
import BalanceSheet from './Pages/balanceSheet';
import UserManagement from './Pages/UserManagement'
import Home from './Pages/Home';
import HistoryDeposit from './Pages/HistoryDeposit';
import RakeHistory from './Pages/RakeHistory';
import RefundHistory from './Pages/RefundHistory';
import WithDrawlHistory from './Pages/WithDrawlHistory';
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
    name: "Dashboard",
    icon:<DashboardIcon/>,
    component: Home,
    layout: "/admin"
  },
  {
    route:'/BalanceSheet',
    name: "Balance Sheet",
    icon:<ShoppingCartIcon/>,
    component: BalanceSheet,
    layout: "/admin"
  },
  {
    route:'/roomManagement',
    name: "Room Management",
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
    route:"/historyDeposit",
    name: "Deposit",
    icon:<AssignmentIcon/>,
    component: HistoryDeposit,
    layout:"/admin"
  },
  {
    route:"/historyRake",
    name: "Rake",
    icon:<AssignmentIcon/>,
    component:RakeHistory,
    layout:"/admin"
  },
  {
    route:"/historyRefund",
    name: "Refund",
    icon:<AssignmentIcon/>,
    component:RefundHistory,
    layout:"/admin"
  },
  {
    route:"/historyWithdraw",
    name: "Withdrawal",
    icon:<AssignmentIcon/>,
    component:WithDrawlHistory,
    layout:"/admin"
  },

];
