import React, { Component } from 'react'

import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import Home from './home/Home'
import About from './about/About'
import { Error404 } from './common/errors'

class App extends Component {
  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
