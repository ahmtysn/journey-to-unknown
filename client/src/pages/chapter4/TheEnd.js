import React from 'react';
import { Link } from 'react-router-dom';

function TheEnd() {
  return (
    <div className='column fullPage'>
      <h1>THE END</h1>
      <p>Do you want to try again ?</p>
      <Link to='/'>
        <button>Journey to Unknown</button>
      </Link>
    </div>
  );
}

export default TheEnd;
