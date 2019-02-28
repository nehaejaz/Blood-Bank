import React from 'react'
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <div className='SignedInLinks'>
         <ul id="nav-mobile"className="right hide-on-med-and-down">
        <li><Link to='/registerdonor'>Register Donor </Link></li>
        <li><Link to='/'>Logout</Link></li>
        <li><Link to='/' className='btn btn-floating red'>NN</Link></li>
      </ul>
        </div>
    )
}
export default SignedInLinks