import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/chapter1'>Part-I</Link>
      <Link to='/chapter2'>Part-II</Link>
      <Link to='/chapter3'>Part-III</Link>
      <Link to='/chapter4'>Part-IV</Link>
      <Link to='/form'>Form</Link>
    </div>
  );
}

export default NavBar;
