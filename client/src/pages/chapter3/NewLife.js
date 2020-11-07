import React from 'react';
import Direction from '../../components/Direction';

function NewLife() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/captain.jpeg' alt='captain' />
      <p className='m-left m-right'>
        Now you are so famous. You have different life. You forgot your previous
        life.
      </p>
      <img src='../images/chapter-3/lux-auto.jpeg' alt='lux-auto' />
      <Direction children='Next' path='/chapter3/leader' />
    </div>
  );
}

export default NewLife;
