import React from 'react';
import Direction from '../../components/Direction';

function MeetFather() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        There is a quiet environment. Nobody dares to speak.
      </p>
      <img src='../images/chapter-2/boss1.jpeg' alt='boss' />
      <Direction title='Next' path='/chapter2/tell-your-name' />
    </div>
  );
}

export default MeetFather;
