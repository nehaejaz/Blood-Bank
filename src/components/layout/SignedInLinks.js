import React from 'react'
import {Link} from 'react-router-dom'
import {Icon,Dropdown,NavItem,Button} from 'react-materialize'

const SignedInLinks = () => {
    return(
        <div className='SignedInLinks'>
         <ul id="nav-mobile"className="right hide-on-med-and-down">
         <li><Dropdown alignmet='right' trigger={
    <a class="btn-floating disabled"><i class="material-icons">notifications</i></a>
  }>
  <NavItem>one</NavItem>
  <NavItem divider />
  <NavItem>two</NavItem>
</Dropdown></li>
        <li><Link to='/registerdonor'>Register Donor </Link></li>
        <li><Link to='/'>Logout</Link></li>
        <li><Link to='/' className='btn btn-floating red'>NN</Link></li>
      </ul>
        </div>
    )
}
export default SignedInLinks