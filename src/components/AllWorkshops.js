import React from 'react'
import WorkshopList from '../connectors/WorkshopList'
import WorkshopNavBar from '../connectors/WorkshopNavBar'
import MenuButton from '../connectors/MenuButton'

const AllWorkshops = () => (
  <div>
    <WorkshopNavBar />
    <div className="container">
      <WorkshopList />
      <MenuButton workshop_id='' menu_type='global' />
    </div>
  </div>
)

export default AllWorkshops
