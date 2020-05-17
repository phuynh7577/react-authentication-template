import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props.user)
  let nav = props.user ?
    <div>
      <Link to='' className='Navbar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/dashboard" className='Navbar-link'>DASHBOARD</Link>
    </div>
    :
    <div>
      <Link to='/login' className='Navbar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='Navbar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default Navbar;