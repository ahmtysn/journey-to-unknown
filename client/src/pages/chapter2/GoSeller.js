import React from 'react';
import Direction from '../../components/Direction';

function GoSeller() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-2/classic-car.jpeg' alt='classic-car' />
      <p className='m-left'>
        You were learning how to be a gangster. First of all, you needed a gun.
      </p>
      <Direction children='Next' path='/chapter2/speak-with-seller' />
    </div>
  );
}

export default GoSeller;
