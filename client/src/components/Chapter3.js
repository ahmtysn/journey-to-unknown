import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chapter3({ seeChapter4, setSeeChapter4 }) {
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
        <img src='images/fight/captain.jpeg' alt='' />
        <p className='m-left m-right'>
          Now you are so famous. You have different life. You forgot your
          previous life.
        </p>
        <img src='images/newLife/luxauto.jpeg' alt='' />
      </div>
      <div className='row fullPage'>
        <img src='images/newLife/gambling.jpeg' alt='' />
        <p className='m-left'>You have new lux habits.</p>
      </div>
      <div className='row fullPage'>
        <img src='images/fight/leader.jpeg' alt='' />
        <p className='m-left m-right'>
          You are the leader and god-father of future..
        </p>
        <img src='images/newLife/cigaret.jpeg' alt='' />
      </div>
      <div className='row fullPage'>
        <img src='images/newLife/motor.png' alt='' />
        <p className=' m-left m-right'>
          One day You learned the place of HH siblings. These killed your
          mother. Revenge time is coming. You got more power.. Now you can kill
          them..
        </p>
        <div className='column'>
          <img
            className='half-img m-bottom'
            src='images/enemy/enemy.jpeg'
            alt=''
          />
          <img className='half-img' src='images/enemy/enemy1.jpeg' alt='' />
        </div>
      </div>
      <div className='row fullPage'>
        <img src='images/escape/lonestreet.jpeg' alt='' />
        <p className='m-left'>
          You wait to much in the quit street.But You saw them and you want to
          revenge.
        </p>
      </div>

      <div className='row fullPage'>
        <div className='column'>
          <img className='half-img m-bottom' src='images/mom.jpeg' alt='' />
          <img
            className='half-img'
            src='https://i.pinimg.com/236x/9c/7c/39/9c7c396cc3a84f75e746b816c2845431.jpg'
            alt=''
          />
        </div>
        <p className=' m-left m-right'>
          Ahh Shitt.. Police patrol see you you have two choices now. Kill them
          and finish or escape from there to infinity. But you start to think
          your mother!
        </p>
        <img src='images/patrol.jpeg' alt='' />
      </div>
      <div className='column fullPage'>
        <p>You have 2 options</p>
        <div className='row m-top'>
          <div className='column'>
            <img
              onClick={takeRevenge}
              className='options-img'
              src='images/choice/kill.jpeg'
              alt='kill'
            />
            <p className='m-top'>Kill Him</p>
          </div>
          <div className='column'>
            <img
              onClick={takeRevenge}
              className='options-img'
              src='images/choice/save.jpg'
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
