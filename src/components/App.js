import React from 'react'
import { Route, Link, HashRouter } from 'react-router-dom';
import Workshop from './Workshop'
import AllWorkshops from './AllWorkshops'
import MenuModal from '../connectors/MenuModal'

const App = () => (
  <HashRouter>
    <div>

      <MenuModal />

      <div className="container">
        <Route path='/:workshop_id' component={Workshop} />
        <Route exact path='/' component={AllWorkshops} />
      </div>
    </div>
  </HashRouter>
)

export default App
