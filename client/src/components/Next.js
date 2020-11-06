import React from 'react';
import { Link } from 'react-router-dom';

function Next({ path }) {
  return (
    <div className='next-btn'>
      <Link to={path}>
        <button>Next</button>
      </Link>
    </div>
  );
}

export default Next;
