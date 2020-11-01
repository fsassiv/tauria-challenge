import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routing from './Routing';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Routing />
  </Router>,
  root,
);
