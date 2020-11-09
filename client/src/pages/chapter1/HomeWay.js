import React from 'react';
import Direction from '../../components/Direction';

function HomeWay() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/happy-boy.jpeg' alt='happy-boy' />
      <p className='m-left m-right'>
        You are going to home. Your mom probably prepare your favorite dishes .
        Because today is your birthday. Yo are so happy !
      </p>
      <img src='../images/chapter-1/home-way.jpeg' alt='home-way' />
      <Direction title='Next' path='/chapter1/killer' />
    </div>
  );
}

export default HomeWay;
