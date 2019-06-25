import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import PdfViewer from '../common/PdfViewer';
import pdf from '../common/images/example.pdf';

const ResourcesContent = ({actions, token, loggedIn}) => {
  // TODO Move to parent classes
  if(!loggedIn) {
    return <Redirect to='/login' />
  }

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
