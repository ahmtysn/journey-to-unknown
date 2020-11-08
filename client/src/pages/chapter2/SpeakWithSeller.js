import React from 'react';
import Direction from '../../components/Direction';

function SpeakWithSeller() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        The arms dealer is the most famous man in the region. He is also very
        sensitive about money.
      </p>
      <img src='../images/chapter-2/gun-seller.jpeg' alt='gun-seller' />
      <Direction title='Next' path='/chapter2/select-gun' />
    </div>
  );
}

export default SpeakWithSeller;
