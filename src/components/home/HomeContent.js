import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const HomeContent = ({actions, token, loggedIn}) =>
{
  if(!loggedIn) {
    return (<Redirect to='/login' />);
  }

  return (
    <div>
      <Typography variant="h5" paragraph={true}>
        Welcome Chris!
      </Typography>
      <button onClick={() => actions.exampleGet('user/all', token)}>AUTHED API CALL</button>
    </div>
  );
};

HomeContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default HomeContent;
