import React from 'react';
import { render } from "react-dom";
import myStore from "./store/store.js";
import { Provider } from "react-redux";
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import App from './app.js';

function Root(){
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
}

render(<Root />, document.getElementById('root'));
