import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Analytics } from 'aws-amplify';

Analytics.autoTrack('session', {
  enable: true,
  immediate: true
});

Analytics.autoTrack('pageView', {
  enable: true,
  type: 'SPA',
  immediate: true
});

Analytics.autoTrack('event', {
  enable: true,
  immediate: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);