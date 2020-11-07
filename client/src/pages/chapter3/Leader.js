import React from 'react';
import Direction from '../../components/Direction';

function Leader() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/leader.jpeg' alt='leader' />
      <p className='m-left m-right'>
        You are the leader and god-father of future..
      </p>
      <img src='../images/chapter-3/cigaret.jpeg' alt='cigaret' />
      <Direction children='Next' path='/chapter3/lux-habits' />
    </div>
  );
}

export default Leader;
