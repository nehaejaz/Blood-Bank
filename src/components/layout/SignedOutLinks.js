import React from 'react'
import {Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <div className='SignedInLinks'>
         <ul id="nav-mobile"className="right hide-on-med-and-down">
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
      </ul>
        </div>
    )
}
export default SignedOutLinks