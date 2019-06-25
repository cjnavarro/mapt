import React from 'react';
import Navigation from '../common/Navigation';

import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';

//import LogoCard from '../common/LogoCard';
import Deck from '../common/Deck';

import reactLogo from '../common/images/react.png';
import reduxLogo from '../common/images/redux.png';
import mySqlLogo from '../common/images/mysql.png';
import dropWizardLogo from '../common/images/dropwizard.png';
import awsLogo from '../common/images/aws.png';

const cards = [
  { image: awsLogo, desc: 'EC2 instance (RHEL 7)' },
  { image: dropWizardLogo, desc: 'Version 1.3.12' },
  { image: mySqlLogo, desc: 'Version 8.0' },
  { image: reactLogo, desc: 'Version 16.8.6' },
  { image: reduxLogo, desc: 'Version 4.0.1' }
];

const About = () => (
  <Navigation displayName="About">
    <Typography variant="h5" paragraph={true} align="center">
      Here are a few of the tools used to create this app.
    </Typography>
    <Deck cards={cards}/>
  </Navigation>
);

export default About;
