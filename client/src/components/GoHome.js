import React from 'react';
import { Link } from 'react-router-dom';

function GoHome() {
  return (
    <div className='column fullPage'>
      <h1>You are a coward.</h1>
      <h3>You can never be a gangster.</h3>
      <p>GO HOME!</p>
      <Link to='/'>
        <button>Try Again</button>
      </Link>
    </div>
  );
}

export default GoHome;
