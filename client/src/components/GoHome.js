import React from 'react';
import { Link } from 'react-router-dom';

function GoHome() {
  return (
    <div className='column fullPage'>
      <h1>You are a coward...</h1>
      <h1>You can never be a gangster...</h1>
      <h1>GO HOME !</h1>
      <Link to='/'>
        <button>Try Again</button>
      </Link>
    </div>
  );
}

export default GoHome;
