import React from 'react'
import WorkshopList from '../connectors/WorkshopList'
import AllWorkshopsNavBar from '../connectors/AllWorkshopsNavBar'
import MenuButton from '../connectors/MenuButton'

const AllWorkshops = ({match}) => (
  <div>
    <AllWorkshopsNavBar />
    <div className="container">
      <WorkshopList />
      <MenuButton workshop_id='' menu_type='global' my_id={match.params.my_id} my_name={match.params.my_name} />
    </div>
  </div>
)

export default AllWorkshops
