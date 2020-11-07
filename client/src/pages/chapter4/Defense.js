import React from 'react';
import { Link } from 'react-router-dom';

function Defense() {
  return (
    <div className='column fullPage'>
      <p>You have 2 options</p>
      <div className='row m-top'>
        <div className='column'>
          <Link to='/chapter4/hard-punishment'>
            <img
              className='options-img'
              src='../images/chapter-4/not-regret.jpeg'
              alt='not-regret'
            />
          </Link>
          <p className='m-top'>I'm not regret.I have no word to you.</p>
        </div>
        <div className='column'>
          <Link to='/chapter4/reduced-penalty'>
            <img
              className='options-img'
              src='../images/chapter-4/regret.jpg'
              alt='regret'
            />
          </Link>
          <p className='m-top'>
            I'm regret.I will tell everything what I know.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Defense;
