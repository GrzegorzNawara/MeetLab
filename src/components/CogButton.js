import React from 'react'
//import debug from '../include/debug'

const CogButton = ({visible, menu_type, workshop_id, onClick}) => {
  return (visible)?(
  <div className="admin-button">
    <img onClick={() => onClick({menu_type:menu_type, workshop_id:workshop_id})} src='./images/admin-button.png' alt=''/>
  </div>
):null}

export default CogButton
