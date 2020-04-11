import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import App from './app.js';

function Root(){
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
