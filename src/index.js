import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import store from './Redux/Store/Store';
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  ,document.getElementById('root')
);

