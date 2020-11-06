import React from 'react';
import Direction from '../../components/Direction';

function SpeakWithSeller() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        The seller well-known, he is the boss of weapons.
      </p>
      <img src='../images/chapter-2/gun-seller.jpeg' alt='gun-seller' />
      <Direction children='Next' path='/chapter2/7' />
    </div>
  );
}

export default SpeakWithSeller;
