import React from 'react'
import { Link } from 'react-router-dom'
import debug from '../include/debug'

const TitleNavBar = ({title, subtitle, pin, mgname, edit_visible, workshop_id, onEditClick}) => (
  <div className="d-flex row mb-3 m-0 p-0 bg-white border-bottom box-shadow">
    <div className='col-12 w-100 m-0 p-0'>
      <div className='row m-0 p-2'>
        <div className='col-6 p-0'>
          <Link to='/' title="logo"><img className="micro-logo-image" alt="logo" src="images/logo.png"></img></Link>
        </div>
        <div className='col-6 p-0 text-right'>
          {(edit_visible!==1)?null:
           <img onClick={() => onEditClick({workshop_id})} className="edit-image" alt="logo" src="images/edit-button.png"></img>}
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-12 text-center'>
          <span className="">
            <span className='h2'>{title}</span>
            <br /><span className='h5 color-gray'>{subtitle}</span>
          </span>
        </div>
      </div>
      <div className='row m-0 p-2'>
        <div className='col-6 p-0'>
          <span className='h5 color-gray'>{mgname}</span>
        </div>
        <div className='col-6 p-0 text-right'>
          <span className='h5 color-gray'>{'PIN: '+pin}</span>
        </div>
      </div>
    </div>
  </div>
)

export default TitleNavBar
