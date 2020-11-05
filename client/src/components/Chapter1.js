import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter1({ seeChapter2, setSeeChapter2 }) {
  const [accept, setAccept] = useState(false);
  const [clicked, setClicked] = useState(false);

  const getChapter2 = () => {
    setSeeChapter2(true);
  };

  const acceptOffer = () => {
    setAccept(true);
    setClicked(true);
  };
  const rejectOffer = () => {
    setAccept(false);
    setClicked(true);
  };

  return (
    <div>
      <div className='row fullPage'>
        <img
          src='https://i.pinimg.com/564x/94/65/c7/9465c7dac8f4a7e88454c8c50d27b15e.jpg'
          alt='happy-kids'
        />
        <p className='m-left'>
          A little boy was too happy because today is his birthday and his
          mother should have done super cakes...
        </p>
      </div>
      <div className='row fullPage'>
        <p className='m-right'>
          He couldn't believe that. His all family were ebolished. He scared and
          he can't stand to see his mother and father.
        </p>
        <img src='images/murder/murder1.jpeg' alt='' />
      </div>
      <div className='row fullPage'>
        <img src='images/escape/escape3.jpeg' alt='run' />
        <p className='m-left m-right'>Run run and run...</p>
        <img src='images/escape/escape1.jpeg' alt='escape' />
      </div>
      <div className='column fullPage'>
        <div className='row'>
          <img src='images/offer/offer4.png' alt='run' />
          <p className='m-left'>
            An interesting offer, Do you want to join us ?
          </p>
        </div>
        <div className='row'>
          <button onClick={acceptOffer}>YES</button>
          <button onClick={rejectOffer}>NO</button>
        </div>
      </div>
      {clicked && accept && (
        <div className='column fullPage'>
          <h1>Welcome to our world...</h1>
          <p>To learn more thing, click on Chapter 2</p>
          <Link to='/chapter2'>
            <button onClick={getChapter2}>Chapter 2</button>
          </Link>
        </div>
      )}
      {clicked && !accept && (
        <div className='column fullPage'>
          <h1>Evine don seni korkak pislik!</h1>
          <p>Go Home Yanky..</p>
        </div>
      )}
    </div>
  );
}

export default Chapter1;
