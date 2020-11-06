import React from 'react';
import Direction from '../../components/Direction';

function HomeWay() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-1/home-way.jpg' alt='home-way' />
      <p className='m-left'>
        A little boy was too happy because today is his birthday and his mother
        should have done super cakes...
      </p>
      <Direction children='Next' path='/chapter1/2' />
    </div>
  );
}

export default HomeWay;
