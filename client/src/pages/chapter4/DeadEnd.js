import React from 'react';
import Direction from '../../components/Direction';

function DeadEnd() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/execution.jpeg' alt='execution' />
      <p className='m-left'>
        But this did not please the gang. A few weeks later it was revealed that
        you died in your ward by accident. !!
      </p>
      <Direction children='Next' path='/chapter4/the-end' />
    </div>
  );
}

export default DeadEnd;
