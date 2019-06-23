import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';

import PdfViewer from '../common/PdfViewer';
import pdf from '../common/images/example.pdf';

const ResourcesContent = ({actions, token, loggedIn}) => {
  // TODO Move to parent classes
  if(!loggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <div>
      Resources PDF Example
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
