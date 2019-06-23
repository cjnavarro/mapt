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

const About = () => (
  <Navigation displayName="About">
    <Typography variant="h5" paragraph={true}>
      Here are a few of the tools used to create this app.
    </Typography>
    <Grid container spacing={8}>
      <Grid item xs>
        <LogoCard title="AWS" description="EC2 instance (RHEL 7)" image={awsLogo}
          link="https://aws.amazon.com/"/>
      </Grid>
      <Grid item xs>
        <LogoCard title="Dropwizard" description="Version 1.3.12" image={dropWizardLogo}
          link="https://www.dropwizard.io/1.3.12/docs/getting-started.html"/>
      </Grid>
      <Grid item xs>
        <LogoCard title="MySQL" description="Version 8.0" image={mySqlLogo}
          link="https://www.mysql.com/"/>
      </Grid>
      <Grid item xs>
        <LogoCard title="React" description="Version 16.8.6" image={reactLogo}
          link="https://reactjs.org/"/>
      </Grid>
      <Grid item xs>
        <LogoCard title="Redux" description="Version 4.0.1" image={reduxLogo}
          link="https://redux.js.org/"/>
      </Grid>
    </Grid>
  </Navigation>
);

export default About;
