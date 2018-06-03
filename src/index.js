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

const version='0.10';
const initialState = loadState(version, {
  version: version,
  workshops: [],
  my_id: v4(),

  show_menu: 0,
  menu_choosen: '',
  menu_type: 'global',
  menu: [
    {menu_type:'global', mtitle:'Workshops', cmd:'ADD_WORKSHOP', ctitle:'New workshop', subtitle:'Add your new hidden workshop'},
    {menu_type:'workshop', mtitle:'Workshop', cmd:'CMD_CLR', ctitle:'Clear', subtitle:'Clear this workshop'},
    {menu_type:'workshop', mtitle:'Workshop', cmd:'CMD_DEL', ctitle:'Delete', subtitle:'Remove this workshop'}
  ],
  my_menu: []
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

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
