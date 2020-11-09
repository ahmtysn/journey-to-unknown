import React from 'react';
import Direction from '../../components/Direction';
function Killer() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/killer.jpeg' alt='killer' />
      <p className='m-left'>
        Several armed men are waiting outside of your house. You're wondering
        what's in house? Are your mom and dad okay?
      </p>
      <Direction title='Next' path='/chapter1/execution' />
    </div>
  );
}

export default Killer;
