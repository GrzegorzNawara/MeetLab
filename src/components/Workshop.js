import React from 'react'
import BrickList from '../connectors/BrickList'
import BrickNavBar from '../connectors/BrickNavBar'
import MenuButton from '../connectors/MenuButton'

const Workshop = ({match}) => (
    <div className="container">
      <BrickNavBar workshop_id={match.params.workshop_id} />
      <BrickList workshop_id={match.params.workshop_id} />
      <MenuButton workshop_id={match.params.workshop_id} menu_type='workshop' />
    </div>
)

export default Workshop
