import React from 'react';
import Direction from '../../components/Direction';

function HardPunishment() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        Judgement time you get 30 years sentences... It is incredible !! But you
        were too brave, your friends will save you.
      </p>
      <img src='../images/chapter-4/judge1.jpeg' alt='judge' />
      <Direction children='Next' path='/chapter4/king-of-jail' />
    </div>
  );
}

export default HardPunishment;
