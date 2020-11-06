import React from 'react';
import { Link } from 'react-router-dom';

function Direction({ children, path, onClick }) {
  return (
    <div className='direction-btn'>
      <Link to={path}>
        <button onClick={onClick}>{children}</button>
      </Link>
    </div>
  );
}

export default Direction;
