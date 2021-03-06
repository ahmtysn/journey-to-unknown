import React from 'react';
import Direction from '../../components/Direction';

function Leader() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/leader.jpeg' alt='leader' />
      <p className='m-left m-right'>
        They call you BOSS, in the eyes of your friends you are a big hero!
      </p>
      <img src='../images/chapter-3/fights.jpeg' alt='fights' />
      <Direction title='Next' path='/chapter3/lux-habits' />
    </div>
  );
}

export default Leader;
