import React from 'react';
import Direction from '../../components/Direction';

function GodFather() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        Artik herkesin saygi duydugu gelecegin babasisin....
      </p>
      <img src='../images/chapter-4/target.jpeg' alt='target' />
      <Direction children='Next' path='/chapter4/the-end' />
    </div>
  );
}

export default GodFather;
