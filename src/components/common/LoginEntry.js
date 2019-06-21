import React, { useState } from 'react'
import  { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const LoginEntry = ({actions, message, loggedIn}) =>
{
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = React.useState(true);

  console.log(loggedIn);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // Already authed go home!
  if(loggedIn == true) {
    return <Redirect to='/home' />
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={user}
            onChange={(e) => setUser(e.target.value)}
            margin="dense"
            label="Username"
            fullWidth
            />
          <TextField
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="dense"
            label="Password"
            fullWidth
          />
          <DialogContentText>
            { message }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => actions.login(user, password)} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

LoginEntry.propTypes = {
  actions: PropTypes.object.isRequired
}

export default LoginEntry
