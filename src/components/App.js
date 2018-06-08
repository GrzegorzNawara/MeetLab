import React from 'react'
import { Route, HashRouter, Redirect } from 'react-router-dom';
import MenuModal from '../connectors/MenuModal'
import AllWorkshops from './AllWorkshops'
import Workshop from './Workshop'
import Document from './Document'
import { setMyIdAndName } from '../actions'
import debug from '../include/debug'

const App = ({store}) => (
  <HashRouter>
    <div>
      <MenuModal />
      <Route exact path='/' component={AllWorkshops} />
      <Route exact path='/pass/:my_id/:my_name' render={({match}) => {
        debug(store,'STORE').dispatch(setMyIdAndName({my_id:match.params.my_id, my_name:match.params.my_name}));
        return (<Redirect to="/"/>);
      }} />
      <Route exact path='/:workshop_id' component={Workshop} />
      <Route exact path='/:workshop_id/doc/:document_id' component={Document} />
    </div>
  </HashRouter>
)

export default App
