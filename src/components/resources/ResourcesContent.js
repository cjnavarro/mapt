import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Timeline from '../common/Timeline';
import { GET_PDF } from '../../constants/ApiCalls';
import { RECIEVE_PDF } from '../../reducers/api';

const ResourcesContent = ({actions, token, loggedIn}) => {
  // TODO Move to parent classes
  if(!loggedIn) {
    return <Redirect to='/login' />
  }

  //actions.sendGet(GET_PDF, token, RECIEVE_PDF);

  return (
    <div>
      <Typography variant="h5" paragraph={true} align="center">
        You can download my PDF here... eventually!
      </Typography>

    <Timeline/>
    </div>
  );
};

ResourcesContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ResourcesContent;
