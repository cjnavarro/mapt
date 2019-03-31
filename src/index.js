import React from 'react';
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import { Error404 } from './common/errors';

render(
  <div className="main">
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path='/404' component={Error404}/>
        <Redirect exact from="/" to="/home"/>
        <Redirect from="*" to="/404"/>
      </Switch>
    </HashRouter>
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
