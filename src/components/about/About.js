import React from 'react';
import Navigation from '../common/Navigation'
import Typography from '@material-ui/core/Typography';

const About = () =>
(
  <Navigation displayName="About">
    <Typography variant="body1" paragraph={true}>
      Welcome to my site!
    </Typography>
    <Typography variant="body1" paragraph={true}>
      This is the only non-proctected site path.
    </Typography>
  </Navigation>
);

export default About;
