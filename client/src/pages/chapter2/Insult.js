import React from 'react';
import Direction from '../../components/Direction';

function Insult() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-2/insult.jpeg' alt='insult' />
      <p className='m-left'>
        You can't even buy a toy gun with this money, you stupid dog. You are
        wasting my time!
      </p>
      <Direction title='Next' path='/chapter2/kill-or-forgive' />
    </div>
  );
}

export default Insult;
