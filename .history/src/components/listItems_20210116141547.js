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

export const mainListItems = (
  <div>
   <Box bgcolor="lightgray">
   <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="BalanceSheet" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
   </Box>
    
  </div>
   <div>
   <ListSubheader inset>Player history</ListSubheader>
   <ListItem button>
     <ListItemIcon>
       <AssignmentIcon />
     </ListItemIcon>
     <ListItemText primary="Deposit" />
   </ListItem>
   <ListItem button>
     <ListItemIcon>
       <AssignmentIcon />
     </ListItemIcon>
     <ListItemText primary="Rake" />
   </ListItem>
   <ListItem button>
     <ListItemIcon>
       <AssignmentIcon />
     </ListItemIcon>
     <ListItemText primary="Refund" />
   </ListItem>
   <ListItem button>
     <ListItemIcon>
       <AssignmentIcon />
     </ListItemIcon>
     <ListItemText primary="Withdrawl" />
   </ListItem>
 </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Player history</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Deposit" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Rake" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Refund" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Withdrawl" />
    </ListItem>
  </div>
);