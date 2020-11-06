import React from 'react';
import Next from '../../components/Next';

function HomeWay() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/home-way.jpg' alt='home-way' />
      <p className='m-left'>
        A little boy was too happy because today is his birthday and his mother
        should have done super cakes...
      </p>
      <Next path='/chapter1/2' />
    </div>
  );
}

export default HomeWay;
