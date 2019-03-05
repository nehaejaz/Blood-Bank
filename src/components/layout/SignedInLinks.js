import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon,Dropdown,NavItem,Button,SideNav,SideNavItem} from 'react-materialize'
import Notification from '../dashboard/Notification'

const SignedInLinks =()=>{
 
 
    return(
        <div className='SignedInLinks'>
         <ul id="nav-mobile"className="right hide-on-med-and-down">
       <li>  <SideNav
  trigger={<a class="btn-floating grey darken-3" ><i class="material-icons">notifications</i></a>}
  options={{ closeOnClick: true,edge: 'right' }}
  >
  <SideNavItem userView
    user={{
      background: 'img/office.jpg',
      image: 'img/yuna.jpg',
      name: 'John Doe',
      email: 'jdandturk@gmail.com'
    }}
  />
  <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
  <SideNavItem href='#!second'>Second Link</SideNavItem>
  <SideNavItem divider />
  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav></li>
        <li><Link to='/registerdonor'>Register Donor </Link></li>
        <li><Link to='/'>Logout</Link></li>
        <li><Link to='/' className='btn btn-floating red'>NN</Link></li>
      </ul>
        </div>
    )
}
export default SignedInLinks