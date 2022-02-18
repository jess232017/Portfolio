import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import App from './App';

// YOUR_OWN_TRACKING_ID
const TRACKING_ID = "G-HF3KQGFEKF";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
