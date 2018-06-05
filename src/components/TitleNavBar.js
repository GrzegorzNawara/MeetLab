import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({title}) => (
  <div className="d-flex flex-column flex-sm-row align-items-center p-3 px-sm-4 mb-3 bg-white border-bottom box-shadow">
    <Link className="navbar-brand my-0 mr-sm-auto " to='/' title="logo">
      <img className="micro-logo-image" alt="logo" src="images/micro-logo.png"></img></Link>
    <h3 className="my-0  text-center">{title}</h3>
  </div>
)

export default NavBar
