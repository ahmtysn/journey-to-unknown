import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter3({ setSeeChapter4 }) {
  const [respond, setRespond] = useState('');

  const getChapter4 = () => {
    setSeeChapter4(true);
  };

  const takeRevenge = e => {
    if (e.target.alt === 'kill') {
      setRespond('kill');
    } else {
      setRespond('forgive');
    }
  };
  return (
    <div>
      <div className='row fullPage'>
        <img src='images/chapter-3/captain.jpeg' alt='captain' />
        <p className='m-left m-right'>
          Now you are so famous. You have different life. You forgot your
          previous life.
        </p>
        <img src='images/chapter-3/lux-auto.jpeg' alt='lux-auto' />
      </div>
      <div className='row fullPage'>
        <img src='images/chapter-3/gambling.jpeg' alt='gambling' />
        <p className='m-left'>You have new lux habits.</p>
      </div>
      <div className='row fullPage'>
        <img src='images/chapter-3/leader.jpeg' alt='leader' />
        <p className='m-left m-right'>
          You are the leader and god-father of future..
        </p>
        <img src='images/chapter-3/cigaret.jpeg' alt='cigaret' />
      </div>
      <div className='row fullPage'>
        <img src='images/chapter-3/motor.png' alt='motor' />
        <p className=' m-left m-right'>
          One day You learned the place of HH siblings. These killed your
          mother. Revenge time is coming. You got more power.. Now you can kill
          them..
        </p>
        <div className='column'>
          <img
            className='half-img m-bottom'
            src='images/chapter-3/enemy1.jpeg'
            alt='enemy'
          />
          <img
            className='half-img'
            src='images/chapter-3/enemy2.jpeg'
            alt='enemy'
          />
        </div>
      </div>
      <div className='row fullPage'>
        <img src='images/chapter-3/quit-street.jpeg' alt='quit-street' />
        <p className='m-left'>
          You wait to much in the quit street.But You saw them and you want to
          revenge.
        </p>
      </div>

      <div className='row fullPage'>
        <div className='column'>
          <img
            className='half-img m-bottom'
            src='images/chapter-3/mom1.jpeg'
            alt='mom'
          />
          <img className='half-img' src='images/chapter-3/mom2.jpg' alt='mom' />
        </div>
        <p className=' m-left m-right'>
          Ahh Shitt.. Police patrol see you you have two choices now. Kill them
          and finish or escape from there to infinity. But you start to think
          your mother!
        </p>
        <img src='images/chapter-3/patrol.jpeg' alt='patrol' />
      </div>
      <div className='column fullPage'>
        <p>You have 2 options</p>
        <div className='row m-top'>
          <div className='column'>
            <img
              onClick={takeRevenge}
              className='options-img'
              src='images/chapter-3/kill.jpeg'
              alt='kill'
            />
            <p className='m-top'>Kill Him</p>
          </div>
          <div className='column'>
            <img
              onClick={takeRevenge}
              className='options-img'
              src='images/chapter-3/dont-mind.jpg'
              alt='never-mind'
            />
            <p className='m-top'>Forgive Him</p>
          </div>
        </div>
      </div>
      {respond === 'kill' && (
        <div className='column fullPage'>
          <p>You feel yourself free. You take your revenge. Mom sleep wel.</p>
          <p className='m-top'>To learn more thing, click on Chapter 3</p>
          <Link to='/chapter4'>
            <button onClick={getChapter4}>Chapter 4</button>
          </Link>
        </div>
      )}
      {respond === 'forgive' && (
        <div className='column fullPage'>
          <p>You always scared. GO HOME and start CRY like a little girl. </p>
        </div>
      )}
    </div>
  );
}

export default Chapter3;
