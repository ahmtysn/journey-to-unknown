import React from 'react';
import Direction from '../../components/Direction';

function GoSeller() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-2/classic-car.jpeg' alt='classic-car' />
      <p className='m-left'>
        You will learn how to fight but first should buy a weapon.
      </p>
      <Direction children='Next' path='/chapter2/6' />
    </div>
  );
}

export default GoSeller;
