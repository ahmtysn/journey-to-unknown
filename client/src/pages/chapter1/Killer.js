import React from 'react';
import Direction from '../../components/Direction';
function Killer() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/killer.jpeg' alt='killer' />
      <p className='m-left'>
        Several armed men are waiting outside of your house. You wonder what
        happened inside? Is your mother okay?
      </p>
      <Direction children='Next' path='/chapter1/execution' />
    </div>
  );
}

export default Killer;
