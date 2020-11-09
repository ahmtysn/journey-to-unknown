import React from 'react';
import Direction from '../../components/Direction';

function Bribe() {
  return (
    <div className='row fullPage'>
      <div className='column'>
        <img
          className='half-img m-bottom'
          src='../images/chapter-4/free.jpeg'
          alt='free'
        />
        <img
          className='half-img'
          src='../images/chapter-4/judge.jpeg'
          alt='judge'
        />
      </div>
      <p className='m-left m-right'>
        Your friends have not forgotten you. They came to your aid within a few
        weeks. There is no door that money cannot open...
      </p>
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
      <Direction title='Next' path='/chapter4/god-father' />
    </div>
  );
}

export default Bribe;
