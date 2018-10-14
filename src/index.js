import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Pages from './components/Pages.js';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <Pages/>
  </Provider>
  ,
  document.getElementById('app')
);
