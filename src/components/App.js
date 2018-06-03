import React from 'react'
import NavBar from './NavBar'
import WorkshopList from '../connectors/WorkshopList'
import MenuButton from '../connectors/MenuButton'
import MenuModal from '../connectors/MenuModal'

const App = () => (
  <div>

    <NavBar />
    <MenuModal />

    <div className="container">
      <WorkshopList />
      <MenuButton />
    </div>

  </div>
)

export default App
