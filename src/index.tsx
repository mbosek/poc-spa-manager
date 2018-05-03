import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ModuleApp } from './modules/App';
import mySaga from './sagas';
import reducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ModuleApp />
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
