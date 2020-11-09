import React from 'react';
import Direction from '../../components/Direction';
function SleepStreet() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/sleep-street.jpeg' alt='sleep-street' />
      <p className='m-left'>
        You stayed in the streets for weeks. You are hungry and thirsty.
        Sometimes you had to steal.
      </p>
      <Direction title='Next' path='/chapter1/offer' />
    </div>
  );
}

export default SleepStreet;
