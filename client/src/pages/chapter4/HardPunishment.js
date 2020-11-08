import React from 'react';
import Direction from '../../components/Direction';

function HardPunishment() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        The judge gave a 30 years sentence without mercy but this solid stance
        pleased the gang.
      </p>
      <img src='../images/chapter-4/judge1.jpeg' alt='judge' />
      <Direction title='Next' path='/chapter4/king-of-jail' />
    </div>
  );
}

export default HardPunishment;
