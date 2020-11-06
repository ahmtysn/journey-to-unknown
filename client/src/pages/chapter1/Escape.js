import React from 'react';
import Next from '../../components/Next';

function Escape() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/escape1.jpeg' alt='escape' />

      <p className='m-left m-right'>Run run and run...</p>
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
      <Next path='/chapter1/4' />
    </div>
  );
}

export default Escape;
