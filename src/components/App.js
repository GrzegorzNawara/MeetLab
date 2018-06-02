import React from 'react'
import NavBar from './NavBar'
import WorkshopList from '../connectors/WorkshopList'
import AdminButton from './AdminButton'

const App = () => (
  <div>

    <NavBar />

    <div className="container">
      <WorkshopList />
      <AdminButton />
    </div>

  </div>
)

export default App
