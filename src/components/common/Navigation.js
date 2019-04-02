import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const Navigation = ({ displayName, children, navigation, actions }) =>
(
  <div>
    <AppBar className="navigation" position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={() => actions.toggleDrawer()}
          >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          { displayName }
        </Typography>
      </Toolbar>
    </AppBar>

    <Drawer open={navigation.drawerOpen} onClose={f=>f}>
      Hi
    </Drawer>

    {children}
  </div>
);

export default Navigation;


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
