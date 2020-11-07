import React from 'react';
import Direction from '../../components/Direction';

function DeadEnd() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/execution.jpeg' alt='execution' />
      <p className='m-left'>
        Bir kac gun icinde odanda olu bulundun, ne yazik !!
      </p>
      <Direction children='Next' path='/chapter4/the-end' />
    </div>
  );
}

export default DeadEnd;
