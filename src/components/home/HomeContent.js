import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';

const HomeContent = ({actions, token, loggedIn}) =>
{
  if(!loggedIn) {
    return (<Redirect to='/login' />);
  }

  return (
    <ul>
      <button onClick={() => actions.exampleGet('user/all', token)}>AUTHED API CALL</button>
    </ul>
  );
};

HomeContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default HomeContent;
