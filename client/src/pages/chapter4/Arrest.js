import React from 'react';
import Direction from '../../components/Direction';

function Arrest() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        You took big responsibility. In from of the police officer killed you
        these guys. It is a mistake or not we will see...
      </p>
      <img src='../images/chapter-4/arrest.jpeg' alt='arrest' />
      <Direction children='Next' path='/chapter4/think-about-judge' />
    </div>
  );
}

export default Arrest;
