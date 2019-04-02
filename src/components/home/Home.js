import React from 'react'
import UINavigation from '../../containers/UINavigation'
import Routes from '../../containers/Routes'

const Home = () =>
(
  <UINavigation displayName="Home">
    <div>Home Page</div>
    <Routes/>
  </UINavigation>
);

export default Home
