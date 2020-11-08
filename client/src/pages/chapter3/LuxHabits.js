import React from 'react';
import Direction from '../../components/Direction';

function LuxHabits() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/gambling1.jpeg' alt='gambling' />
      <p className='m-left m-right'>
        By the way, you also have various luxury habits.
      </p>
      <img src='../images/chapter-3/gambling.jpeg' alt='gambling' />
      <Direction title='Next' path='/chapter3/intelligence' />
    </div>
  );
}

export default LuxHabits;
