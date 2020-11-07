import React from 'react';
import Direction from '../../components/Direction';

function Bribe() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/free.jpeg' alt='free' />
      <p className='m-left m-right'>Paranin acamayacagi kapi yoktur.</p>
      <div className='column'>
        <img
          className='half-img m-bottom'
          src='../images/chapter-4/bribe1.jpeg'
          alt='bribe'
        />
        <img
          className='half-img'
          src='../images/chapter-4/bribe2.jpeg'
          alt='bribe'
        />
      </div>
      <Direction children='Next' path='/chapter4/god-father' />
    </div>
  );
}

export default Bribe;
