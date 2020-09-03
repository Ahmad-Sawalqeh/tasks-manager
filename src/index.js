import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import myStore from "./store/store.js";
import App from './app.js';

function Root(){
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
}

render(<Root />, document.getElementById('root'));
