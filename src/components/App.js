import React from 'react'
import { Route, HashRouter } from 'react-router-dom';
import MenuModal from '../connectors/MenuModal'
import AllWorkshops from './AllWorkshops'
import Workshop from './Workshop'
import Document from './Document'

const App = () => (
  <HashRouter>
    <div>
      <MenuModal />
      <Route exact path='/' component={AllWorkshops} />
      <Route exact path='/:workshop_id' component={Workshop} />
      <Route exact path='/:workshop_id/doc/:document_id' component={Document} />
    </div>
  </HashRouter>
)

export default App
