import React from 'react';
import Navigation from '../common/Navigation';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import LogoCard from '../common/LogoCard';

import reactLogo from '../common/images/react.png';
import reduxLogo from '../common/images/redux.png';
import mySqlLogo from '../common/images/mysql.png';
import dropWizardLogo from '../common/images/dropwizard.png';
import awsLogo from '../common/images/aws.png';
import muiLogo from '../common/images/mui.png';

const cards = [
  { title: 'AWS', image: awsLogo, desc: 'EC2 Instance', link: 'https://aws.amazon.com/' },
  { title: 'Dropwizard', image: dropWizardLogo, desc: 'Version 1.3.12', link: 'https://www.dropwizard.io/1.3.12/docs/getting-started.html' },
  { title: 'MySQL', image: mySqlLogo, desc: 'Version 8.0', link: 'https://www.mysql.com/' },
  { title: 'ReactJS', image: reactLogo, desc: 'Version 16.8.6', link: 'https://reactjs.org/' },
  { title: 'Redux', image: reduxLogo, desc: 'Version 4.0.1', link: 'https://redux.js.org/' },
  { title: 'Material-UI', image: muiLogo, desc: 'Version ~3.9.0', link: 'https://material-ui.com/' }

];

const About = () => (
  <Navigation displayName="About">
    <Typography variant="h5" paragraph={true} align="center">
      Here are a few of the tools used to create this app.
    </Typography>

    <Grid container spacing={8}>
      {cards.map(card => (
        <Grid item xs key={card.title}>
          <LogoCard title={card.title} description={card.desc} image={card.image}
            link={card.link}/>
        </Grid>
      ))}
    </Grid>
  </Navigation>
);

export default About;
