import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginEntry = ({actions}) =>
{
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <TextField
        defaultValue={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
        variant="outlined"
        label="Username"
        />
      <TextField
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        variant="outlined"
        label="Password"
        />
      <Button onClick={() => actions.login(user, password)}>
        Login
      </Button>
    </div>
  )
}

LoginEntry.propTypes = {
  actions: PropTypes.object.isRequired
}

export default LoginEntry
