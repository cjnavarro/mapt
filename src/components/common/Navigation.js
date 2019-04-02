import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
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
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const Navigation = ({ displayName, children, navigation, actions, classes, theme}) =>
(
  <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: navigation.drawerOpen,
            })}
          >
            <Toolbar disableGutters={!navigation.drawerOpen}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={actions.openDrawer}
                className={classNames(classes.menuButton, {
                  [classes.hide]: navigation.drawerOpen,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                mapt - {displayName}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: navigation.drawerOpen,
              [classes.drawerClose]: !navigation.drawerOpen,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: navigation.drawerOpen,
                [classes.drawerClose]: !navigation.drawerOpen,
              }),
            }}
            open={navigation.drawerOpen}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={actions.closeDrawer}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <NavLink to="/home">
                <ListItem button key="Home">
                  <ListItemIcon><Home/></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </NavLink>
              <NavLink to="/about">
                <ListItem button key="About">
                  <ListItemIcon><Info/></ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
)

export default withStyles(styles, { withTheme: true })(Navigation);


// <NavLink to="/home">
//   <Typography variant="h6" color="inherit">
//     Home
//   </Typography>
// </NavLink>
// <NavLink to="/about">
//   <Typography variant="h6" color="inherit">
//     About
//   </Typography>
// </NavLink>
