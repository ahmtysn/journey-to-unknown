import React from 'react';
import Direction from '../../components/Direction';

function Execution() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        He couldn't believe that. His all family were ebolished. He scared and
        he can't stand to see his mother and father.
      </p>
      <img src='../images/chapter-1/dead-family.jpeg' alt='dead-family' />
      <Direction children='Next' path='/chapter1/escape' />
    </div>
  );
}

export default Execution;
