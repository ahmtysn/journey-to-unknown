import React from 'react';
import { Link } from 'react-router-dom';

function Revenge() {
  return (
    <div className='column fullPage options'>
      <h2>There is a very difficult decision necessary to make.</h2>
      <div className='row m-top'>
        <div className='column'>
          <Link to='/chapter3/good-feelings'>
            <img
              className='options-img'
              src='../images/chapter-3/kill.jpeg'
              alt='kill'
            />
          </Link>
          <p className='m-top'>Kill Them</p>
        </div>
        <div className='column'>
          <Link to='/go-home'>
            <img
              className='options-img m-left'
              src='../images/chapter-3/escape.jpeg'
              alt='escape'
            />
          </Link>
          <p className='m-top m-left'>Escape</p>
        </div>
      </div>
    </div>
  );
}

export default Revenge;
