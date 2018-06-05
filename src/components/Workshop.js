import React from 'react'
import BrickList from '../connectors/BrickList'
import BrickNavBar from '../connectors/BrickNavBar'
import MenuButton from '../connectors/MenuButton'
import EditWorkshopTitle from '../connectors/EditWorkshopTitle'

const Workshop = ({match}) => (
  <div>
    <BrickNavBar workshop_id={match.params.workshop_id} />
    <EditWorkshopTitle workshop_id={match.params.workshop_id} />
    <div className="container">
      <BrickList workshop_id={match.params.workshop_id} />
      <MenuButton workshop_id={match.params.workshop_id} menu_type='workshop' />
    </div>
  </div>
)

export default Workshop
