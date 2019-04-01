import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({children}) =>
(
  <div className="navigation">
    <nav>
      <NavLink to="/home">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </nav>
    {children}
  </div>
);

export default Navigation;
