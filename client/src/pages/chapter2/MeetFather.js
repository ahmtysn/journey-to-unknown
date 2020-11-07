import React from 'react';
import Direction from '../../components/Direction';

function MeetFather() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        You walk in the long silent corridor to meet with godfather
      </p>
      <img src='../images/chapter-2/boss1.jpeg' alt='boss' />
      <Direction children='Next' path='/chapter2/tell-your-name' />
    </div>
  );
}

export default MeetFather;
