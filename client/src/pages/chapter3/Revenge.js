import React from 'react';
import { Link } from 'react-router-dom';

function Revenge() {
  return (
    <div className='column fullPage'>
      <p>You have 2 options</p>
      <div className='row m-top'>
        <div className='column'>
          <Link to='/chapter3/good-feelings'>
            <img
              className='options-img'
              src='../images/chapter-3/kill.jpeg'
              alt='kill'
            />
          </Link>
          <p className='m-top'>Kill Him</p>
        </div>
        <div className='column'>
          <Link to='/chapter3'>
            <img
              className='options-img'
              src='../images/chapter-3/dont-mind.jpg'
              alt='never-mind'
            />
          </Link>
          <p className='m-top'>Forgive Him</p>
        </div>
      </div>
    </div>
  );
}

export default Revenge;
