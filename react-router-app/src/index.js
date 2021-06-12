import React from 'react';
import { render as Render } from 'react-dom';
import { Application } from './Application';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

Render(
  <Router>
    <Application />
  </Router>,
  rootElement
);
