import React from 'react';
import Direction from '../../components/Direction';

function GodFather() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        You are the godfather of the future. The story will be told across
        generations...
      </p>
      <img src='../images/chapter-4/target.jpeg' alt='target' />
      <Direction title='Next' path='/chapter4/the-end' />
    </div>
  );
}

export default GodFather;
