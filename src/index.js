import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
