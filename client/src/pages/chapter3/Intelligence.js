import React from 'react';
import Direction from '../../components/Direction';

function Intelligence() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/motor.png' alt='motor' />
      <p className=' m-left m-right'>
        Finally you learned the location of the Jack brothers who killed your
        mother and father with the power you got.
      </p>
      <div className='column'>
        <img
          className='half-img m-bottom'
          src='../images/chapter-3/enemy1.jpeg'
          alt='enemy'
        />
        <img
          className='half-img'
          src='../images/chapter-3/enemy2.jpeg'
          alt='enemy'
        />
      </div>
      <Direction children='Next' path='/chapter3/quiet-street' />
    </div>
  );
}

export default Intelligence;
