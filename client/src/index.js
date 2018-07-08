// Data set up
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore (reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);




// - Ways to check if stripe keys are accessible
// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('ENVIRONMENT IS', process.env.NODE_ENV);
