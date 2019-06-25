import React, { useState } from 'react';
import  { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const LoginContent = ({actions, message, loggedIn}) =>
{
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = React.useState(true);

  // Already authed go home
  if(loggedIn) {
    return <Redirect to='/home' />
  }

  return (
      <Dialog open={open} onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              defaultValue={user}
              onChange={(e) => setUser(e.target.value)}
              margin="dense"
              label="Username"
              autoFocus
              fullWidth
              />
            <TextField
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  actions.login(user, password);
                }
              }}
              />
          </form>
          <DialogContentText>
            { message }
            { message && <div>... But you can still go <Link to="/about">here</Link></div> }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => actions.login(user, password)} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
  )
}

LoginContent.propTypes = {
  actions: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

export default LoginContent
