import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Deposits from './Cards/Deposits';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Hidden from "@material-ui/core/Hidden";
import Grow from "@material-ui/core/Grow";
import Poppers from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Person from "@material-ui/icons/Person";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from 'react-router-dom';
import "typeface-nunito";

import UserManagement from './Pages/UserManagement';
import { Switch, Route } from "react-router-dom";
import BalanceSheet from './Pages/balanceSheet';
import Sidebar from './Sidebar';

import UserForm from './Pages/UserForm';
import EditForm from './Pages/EditForm';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SidebarItems } from './SidebarItems';
import Home from './Pages/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
const switchRoutes = (
  <Switch>
    <Route path="/admin/Dashboard" render={props => <Home {...props} />} />

    <Route path="/admin/BalanceSheet" render={props => <BalanceSheet {...props} />} />

    <Route path="/admin/roomManagement" render={props => <UserManagement {...props} />} />
    <Route path="/admin/historyDeposit" render={props => <HistoryDeposit title="Deposit History" {...props} />} />
    <Route path="/admin/historyRake" render={props => <RakeHistory title="Rake History" {...props} />} />
    <Route path="/admin/historyWithdraw" render={props => <WithDrawlHistory title="WithDrawl History" {...props} />} />
    <Route path="/admin/historyRefund" render={props => <RefundHistory title="Refund History" {...props} />} />
    <Route path="/admin/create" render={props => (
      <UserForm heading="Create Room" {...props} />
    )} />
    <Route exact path="/api/edit/:id" render={props => {
      return (
        <EditForm {...props} />
      )
    }} />

    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);
function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" style={{ background: '#f7f9fc', color: 'black', boxShadow: "none" }} className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>

            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Ludo Admin Panel
          </Typography>

            {/* <IconButton style={{ color: '#9e9e9e'}} color="inherit">
            <Badge badgeContent={4}  color="primary">
              <NotificationsIcon  />
            </Badge>
          </IconButton> */}
            <Link to='/login'>
              <Button>

                <ExitToAppIcon style={{ color: '#9e9e9e' }} className={classes.icons} />

              </Button>
            </Link>

          </Toolbar>
        </AppBar>
        <Box bgcolor="#233044">
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
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
};         <Box bgcolor="#233044">
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon style={{ color: '#eeeeee' }} />
                </IconButton>
              </div>
              <Divider />
              <List><Sidebar /></List>
            </Box>
          </Drawer>
        </Box>
        <main style={{ background: '#f7f9fc' }} className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>


              {switchRoutes}

            </Grid>


          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
export default Dashboard;