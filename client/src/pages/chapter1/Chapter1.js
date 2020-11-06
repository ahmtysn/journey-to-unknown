import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter1({ setSeeChapter2 }) {
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

  console.log(localStorage);

  return (
    <div>
      <div className='row fullPage'>
        <img src='images/chapter-1/home-way.jpg' alt='home-way' />
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
        <img src='images/chapter-1/dead-family.jpeg' alt='dead-family' />
      </div>
      <div className='row fullPage'>
        <img src='images/chapter-1/escape1.jpeg' alt='escape' />

        <p className='m-left m-right'>Run run and run...</p>
        <div className='column'>
          <img
            className='half-img'
            src='images/chapter-1/escape3.jpeg'
            alt='run-escape'
          />
          <img
            className='half-img m-top'
            src='images/chapter-1/escape2.jpeg'
            alt='run-escape'
          />
        </div>
      </div>
      <div className='column fullPage'>
        <div className='row'>
          <img src='images/chapter-1/offer.png' alt='offer' />
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
