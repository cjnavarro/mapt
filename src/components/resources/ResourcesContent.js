import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import PdfViewer from '../common/PdfViewer';
import pdf from '../common/images/example.pdf';

import { GET_PDF } from '../../constants/ApiCalls';
import { RECIEVE_PDF } from '../../reducers/api';

const ResourcesContent = ({actions, token, loggedIn}) => {
  // TODO Move to parent classes
  if(!loggedIn) {
    return <Redirect to='/login' />
  }

  actions.sendGet(GET_PDF, token, RECIEVE_PDF);

  return (
    <div>
      <Typography variant="h5" paragraph={true} align="center">
        Enjoy this PDF, eventually to be served from our backend and restricted
        to certain user roles.
      </Typography>
      <PdfViewer file={pdf}/>
    </div>
  );
};

ResourcesContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ResourcesContent;
