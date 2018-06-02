import React from 'react'

const NavBar = () => (
  <div className=''>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <a className="navbar-brand my-0 mr-md-auto" href="#test" title="logo"><img alt="logo" src="images/logo.png"></img></a>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#test">Features</a>
        <a className="p-2 text-dark" href="#test">Support</a>
        <a className="p-2 text-dark" href="#test">Pricing</a>
      </nav>
      <a className="btn btn-outline-primary" href="#test">Sign up</a>
    </div>
  </div>
)

export default NavBar
