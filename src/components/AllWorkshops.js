import React from 'react'
import WorkshopList from '../connectors/WorkshopList'
import WorkshopNavBar from '../connectors/WorkshopNavBar'
import MenuButton from '../connectors/MenuButton'

const AllWorkshops = () => (
    <div className="container">
      <WorkshopNavBar />
      <WorkshopList />
      <MenuButton workshop_id='' menu_type='global' />
    </div>
)

export default AllWorkshops
