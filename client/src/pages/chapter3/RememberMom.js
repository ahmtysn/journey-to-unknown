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
          src='../images/chapter-3/mom2.jpeg'
          alt='mom'
        />
      </div>
      <p className=' m-left m-right'>
        The damn police patrol car was coming. You also remembered the happy
        memories with your mom. What will you do now?
      </p>
      <img src='../images/chapter-3/patrol.jpeg' alt='patrol' />
      <Direction title='Next' path='/chapter3/revenge' />
    </div>
  );
}

export default RememberMom;
