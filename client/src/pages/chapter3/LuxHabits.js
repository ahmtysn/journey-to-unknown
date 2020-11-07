import React from 'react';
import Direction from '../../components/Direction';

function LuxHabits() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/gambling.jpeg' alt='gambling' />
      <p className='m-left'>You have new lux habits.</p>
      <Direction children='Next' path='/chapter3/intelligence' />
    </div>
  );
}

export default LuxHabits;
