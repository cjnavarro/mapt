import React from 'react';
import UINavigation from '../../containers/UINavigation';
import Typography from '@material-ui/core/Typography';
import LoginContainer from '../../containers/LoginContainer';

const Login = () =>
(
  <UINavigation displayName="Login">
    <LoginContainer/>
  </UINavigation>
);

export default Login;
