import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import store from '../configureStore'
import { Provider } from 'react-redux'

import App from './App'
import '../index.css'
import * as serviceWorker from '../serviceWorker'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  unmountComponentAtNode(div);
});
