import React from 'react';
import Direction from '../../components/Direction';

function Execution() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        You couldn't believe what you saw. Your mom and dad were murdered. Blood
        flows everywhere!
      </p>
      <img src='../images/chapter-1/dead-family.jpeg' alt='dead-family' />
      <Direction title='Next' path='/chapter1/escape' />
    </div>
  );
}

export default Execution;
