import React from 'react';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import GitLogo from '../common/images/github.png';
import LinkedInLogo from '../common/images/linkedin.png';

import { GET_CURRENT_USER } from '../../constants/ApiCalls';
import { RECIEVE_USER } from '../../reducers/api';

const HomeContent = ({actions, token, loggedIn, user}) =>
{
  if(!loggedIn) {
    return (<Redirect to='/login' />);
  }

  // load user
  if(!user || !user.username)
  {
    actions.sendGet(GET_CURRENT_USER, token, RECIEVE_USER)
    return (<div>NO USER...</div>);
  }

  return (
    <div>
      <Typography variant="h5">
        Welcome {user.username.toUpperCase()}!
      </Typography>

      <Typography variant="body1" paragraph={true}>
        This site is a constant work in progress, as I expore using new tools.
      </Typography>

      <Typography variant="body1" paragraph={true}>
        If you can see this you've been authenticated using <code>BasicCredentials</code>,
        and have the user role of <code>{user.role}</code>.
      </Typography>

      <Typography variant="body1" paragraph={true}>
        This pet project uses <code>Dropwizard</code> as it's Java framework for
        developing RESTful web services.
      </Typography>

        <a href="https://github.com/cjnavarro" target="_blank" rel="noopener noreferrer">
          <img src={GitLogo} alt=""/>
        </a>
        <a href="https://www.linkedin.com/in/cjnavarro/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt=""/>
        </a>
    </div>
  );
};

HomeContent.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default HomeContent;
