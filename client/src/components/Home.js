import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='column head fullPage'>
      <h1>JOURNEY to UNKNOWN</h1>
      <Link to='/chapter1'>
        <button>Start</button>
      </Link>
    </div>
  );
}

export default Home;
