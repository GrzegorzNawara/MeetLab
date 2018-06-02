import React from 'react'
//import debug from '../include/debug'

const AdminButton = ({onClick}) => (
  <div className="admin-button">
    <img onClick={onClick} src='./images/admin-button.png' alt=''/>
  </div>
)

export default AdminButton
