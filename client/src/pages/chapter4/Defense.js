import React from 'react';
import { Link } from 'react-router-dom';

function Defense() {
  return (
    <div className='column fullPage options'>
      <h2>
        Will you give all information about the gang and say you regret it?
      </h2>
      <div className='row m-top'>
        <div className='column'>
          <Link to='/chapter4/hard-punishment'>
            <img
              className='options-img'
              src='../images/chapter-4/not-regret.jpeg'
              alt='not-regret'
            />
          </Link>
        </div>
        <div className='column'>
          <Link to='/chapter4/reduced-penalty'>
            <img
              className='options-img m-left'
              src='../images/chapter-4/regret.jpg'
              alt='regret'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Defense;
