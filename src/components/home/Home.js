import React from 'react'
import UINavigation from '../../containers/UINavigation'
import HomeContainer from '../../containers/HomeContainer'

const Home = () =>
(
  <UINavigation displayName="Home">
    <div>Home Page</div>
    <HomeContainer/>
  </UINavigation>
);

export default Home
