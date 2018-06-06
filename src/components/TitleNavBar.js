import React from 'react'
import { Link } from 'react-router-dom'
import debug from '../include/debug'

const TitleNavBar = ({title, edit_visible, workshop_id, onEditClick}) => (
  <div className="d-flex flex-column flex-sm-row p-3 px-sm-4 bg-white border-bottom box-shadow">
    <Link className="navbar-brand mr-sm-auto " to='/' title="logo">
      <img className="micro-logo-image" alt="logo" src="images/logo.png"></img></Link>
    <h3 className="my-0  text-right">{title}
      {(edit_visible!==1)?null:
         <img onClick={() => onEditClick({workshop_id})} className="edit-image ml-3" alt="logo" src="images/edit-button.png"></img>}
    </h3>
  </div>
)

export default TitleNavBar
