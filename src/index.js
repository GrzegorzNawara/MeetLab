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

const version='0.42';
const initialState = loadState(version, {
  version: version,
  my_id: v4(),

  workshop_choosen: '',
  workshops: [],

  show_menu: 0,
  menu_choosen: '',
  menu_type: 'global',
  menu: [
    {menu_type:'global', mtitle:'Workshops', cmd:'ADD_WORKSHOP', title:'New workshop', subtitle:'Add your new hidden workshop'},

    //RAVEN 13
    {menu_type:'workshop', mtitle:'Raven 13',
      title:'Zasady gry', subtitle:'Wrzuć dokument do warsztatu',
      cmd:'ADD_BRICK', brick: {type:'document', id:'doc/rules-raven13-pl', title:'Raven 13: Zasady gry', subtitle:['Dokument']}
    },
    //RAVEN 13

    //RECONQUISTA
    { mtitle:'Reconquista', cmd:'ADD_BRICK', menu_type:'workshop',
      title:'Dobra postawa', subtitle:'Wrzuć dokument do warsztatu',
      brick: {
        id:'doc/dobra-postawa',
        title:'Dobra Postawa',
        subtitle:['Dokument']},
        type:'document'
    },
    {menu_type:'workshop', mtitle:'Reconquista',
      title:'Zasady gry', subtitle:'Dodaj zasady gry',
      cmd:'ADD_BRICK', brick: {type:'document', id:'doc/reconquista-rules-pl', title:'Reconquista: Zasady gry', subtitle:['Zasady działania symulacji']}
    },
    {menu_type:'workshop', mtitle:'Reconquista',
      title:'Uruchom grę', subtitle:'Dodaj i wystartuj kolejną grę',
      cmd:'ADD_BRICK', brick: {type:'document', id:'game/reconquista', title:'Reconquista: Level 1', subtitle:['Uruchomiona gra']}
    },
    {menu_type:'workshop', mtitle:'Reconquista', cmd:'CMD_CLR', title:'Clear', subtitle:'Clear this workshop'},
    //RECONQUISTA

    {menu_type:'workshop', mtitle:'Admin', cmd:'CMD_DEL', title:'Delete', subtitle:'Remove this workshop'}
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
