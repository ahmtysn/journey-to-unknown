import React from 'react';
import { Link } from 'react-router-dom';

function HomeWay() {
  return (
    <div className='row fullPage'>
      <img src='images/chapter-1/home-way.jpg' alt='home-way' />
      <p className='m-left'>
        A little boy was too happy because today is his birthday and his mother
        should have done super cakes...
      </p>
      <Link to='/chapter1/1'>
        <button>Next</button>
      </Link>
    </div>
  );
}

export default HomeWay;
