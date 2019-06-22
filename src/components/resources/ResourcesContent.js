import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';

const ResourcesContent = ({actions, token, loggedIn}) => {
  // TODO Move to parent classes
  if(!loggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <div>
      Resources Content
    </div>
  )
};

ResourcesContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ResourcesContent;
