import React from 'react';
import Direction from '../../components/Direction';

function Escape() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/escape1.jpeg' alt='escape' />

      <p className='m-left m-right'>
        At that moment you only thought of running away. You are so scared. You
        are running from everything !
      </p>
      <div className='column'>
        <img
          className='half-img'
          src='../images/chapter-1/escape3.jpeg'
          alt='run-escape'
        />
        <img
          className='half-img m-top'
          src='../images/chapter-1/escape2.jpeg'
          alt='run-escape'
        />
      </div>
      <Direction children='Next' path='/chapter1/sleep-street' />
    </div>
  );
}

export default Escape;
