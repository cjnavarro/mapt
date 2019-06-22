import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import Login from './login/Login';
import Map from './map/Map';
import Resources from './resources/Resources';
import About from './about/About';
import Error404 from './common/Error404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/map" component={Map}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/about" component={About}/>
            <Route path='/login' component={Login}/>
            <Route path='/404' component={Error404}/>
            <Redirect exact from="/" to="/home"/>
            <Redirect from="*" to="/404"/>
          </Switch>
        </HashRouter>
      </div>
    );
  };
};

export default App;
