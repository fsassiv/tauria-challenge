import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import GlobalContext from './context/global';
import Routing from './Routing';

const root = document.getElementById('root');

ReactDOM.render(
  <GlobalContext>
    <Router>
      <Routing />
    </Router>
  </GlobalContext>,
  root,
);
