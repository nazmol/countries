import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './container';
import dropdownReducer from './reducers';

const preloadedState = {
  selectedCountryId: '',  // for testing purpose
  countries: [{
      id: '1',
      name: 'Ukraine'
    },
    {
      id: '2',
      name: 'USA'
    },
    {
      id: '3',
      name: 'England'
    },
    {
      id: '4',
      name: 'Spain'
    },
    {
      id: '5',
      name: 'Poland'
    }]
};

const store = createStore(dropdownReducer, preloadedState);

const app = (
  <Provider store={store}>
    <App title={'Choose country'}/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));