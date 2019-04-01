import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = ({children}) =>
(
  <div>
    <AppBar className="navigation" position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <Typography variant="h6" color="inherit">
                  News
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

export default Navigation;
