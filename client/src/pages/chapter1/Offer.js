import React from 'react';

function Offer(props) {
  return (
    <div className='column fullPage'>
      <div className='row'>
        <img src='images/chapter-1/offer.png' alt='offer' />
        <p className='m-left'>An interesting offer, Do you want to join us ?</p>
      </div>
      <div className='row'>
        <button onClick={props.acceptOffer}>YES</button>
        <button onClick={props.rejectOffer}>NO</button>
      </div>
    </div>
  );
}

export default Offer;
