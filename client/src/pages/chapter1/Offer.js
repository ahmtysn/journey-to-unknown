import React from 'react';
import { Link } from 'react-router-dom';

function Offer() {
  return (
    <div className='column fullPage'>
      <div className='row'>
        <img src='../images/chapter-1/offer.png' alt='offer' />
        <p className='m-left'>An interesting offer, Do you want to join us ?</p>
      </div>
      <div className='row'>
        <Link to='/chapter2'>
          <button>YES</button>
        </Link>
        <Link to='/go-home'>
          <button>NO</button>
        </Link>
      </div>
    </div>
  );
}

export default Offer;
