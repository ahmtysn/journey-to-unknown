import React from 'react';
import Direction from '../../components/Direction';

function RememberMom() {
  return (
    <div className='row fullPage'>
      <div className='column'>
        <img
          className='half-img m-bottom'
          src='../images/chapter-3/mom1.jpeg'
          alt='mom'
        />
        <img
          className='half-img'
          src='../images/chapter-3/mom2.jpg'
          alt='mom'
        />
      </div>
      <p className=' m-left m-right'>
        Ahh Shitt.. Police patrol see you you have two choices now. Kill them
        and finish or escape from there to infinity. But you start to think your
        mother!
      </p>
      <img src='../images/chapter-3/patrol.jpeg' alt='patrol' />
      <Direction children='Next' path='/chapter3/revenge' />
    </div>
  );
}

export default RememberMom;
