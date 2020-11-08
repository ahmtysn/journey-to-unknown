import React from 'react';
import Direction from '../../components/Direction';

function HomeWay() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/happy-boy.jpeg' alt='happy-boy' />
      <p className='m-left m-right'>
        Today is your birthday. You are going to home very happy. Mom has
        probably prepare your favorite dishes...
      </p>
      <img src='../images/chapter-1/home-way.jpeg' alt='home-way' />
      <Direction children='Next' path='/chapter1/killer' />
    </div>
  );
}

export default HomeWay;
