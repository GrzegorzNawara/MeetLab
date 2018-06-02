import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import mainSaga from './sagas'
import { v4 } from 'uuid'
import { loadState, saveState } from './include/localStorage'
//import debug from './include/debug'

const sagaMiddleware = createSagaMiddleware()

const initialState = loadState({
  workshops: [],
  my_id: v4(),
  my_workshop: {
    is_visible: 0,
    items: []
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

store.subscribe(() => {
  saveState(store.getState())
})

sagaMiddleware.run(mainSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
