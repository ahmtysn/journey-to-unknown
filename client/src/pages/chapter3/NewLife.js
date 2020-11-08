import React from 'react';
import Direction from '../../components/Direction';

function NewLife() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/captain.jpeg' alt='captain' />
      <p className='m-left m-right'>
        Your reputation was spreading everywhere day by day. Your cruelty was on
        everyone's lips.
      </p>
      <img src='../images/chapter-3/lux-auto.jpeg' alt='lux-auto' />
      <Direction children='Next' path='/chapter3/leader' />
    </div>
  );
}

export default NewLife;
