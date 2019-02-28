import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () =>{
    return(
        <div className="Navbar">
        <nav>
    <div className="nav-wrapper grey darken-3">
     <Link to='/' className="brand-logo">Blood Bank <i className="material-icons prefix">local_hospital</i></Link>
      <SignInLinks />
      <SignedOutLinks />
    </div>
  </nav>
        </div>
    )
}



export default Navbar
