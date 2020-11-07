import React from 'react';
import { Link } from 'react-router-dom';

function KillOrForgive() {
  return (
    <div className='column fullPage'>
      <p>You have 2 options</p>
      <div className='row m-top'>
        <div className='column'>
          <Link to='/chapter3'>
            <img
              className='options-img'
              src='../images/chapter-2/kill.jpeg'
              alt='kill'
            />
          </Link>
          <p className='m-top'>Kill Him</p>
        </div>
        <div className='column'>
          <Link to='/chapter2/too-young'>
            <img
              className='options-img'
              src='../images/chapter-2/forgive.jpg'
              alt='never-mind'
            />
          </Link>
          <p className='m-top'>Forgive Him</p>
        </div>
      </div>
    </div>
  );
}

export default KillOrForgive;
