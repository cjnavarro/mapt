import React from 'react';
import Navigation from '../common/Navigation';
import HomeContainer from '../../containers/HomeContainer';

const Home = () => (
  <Navigation displayName="Home">
    <div>Home Page</div>
    <HomeContainer/>
  </Navigation>
);

export default Home;
