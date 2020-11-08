import React from 'react';
import Direction from '../../components/Direction';

function Arrest() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        You are quickly taken into custody by the police officers.
      </p>
      <img src='../images/chapter-4/arrest.jpeg' alt='arrest' />
      <Direction children='Next' path='/chapter4/think-about-judge' />
    </div>
  );
}

export default Arrest;
