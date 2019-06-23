import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { GET_CURRENT_USER } from '../../constants/ApiCalls';
import { RECIEVE_USER } from '../../reducers/api';

const HomeContent = ({actions, token, loggedIn, user}) =>
{
  if(!loggedIn) {
    return (<Redirect to='/login' />);
  }

  // load user
  if(!user)
  {
    actions.sendGet(GET_CURRENT_USER, token, RECIEVE_USER)
  }

  return (
    <div>
      <Typography variant="h5" paragraph={true}>
        Welcome {user.username}!
      </Typography>
    </div>
  );
};

HomeContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default HomeContent;
