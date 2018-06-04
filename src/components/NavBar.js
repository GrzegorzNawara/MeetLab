import React from 'react'

const NavBar = ({visible}) => { return (visible)?(
  <div className=''>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <a className="navbar-brand my-0 mr-md-auto" href="#test" title="logo"><img className="logo-image" alt="logo" src="images/logo.png"></img></a>
    </div>
  </div>
):null}

export default NavBar
