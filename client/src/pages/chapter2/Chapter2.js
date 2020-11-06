import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Chapter2({ setSeeChapter3 }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [validAge, setValidAge] = useState(false);
  const [money, setMoney] = useState('');
  const [enough, setEnough] = useState(false);
  const [respond, setRespond] = useState('');

  const getChapter3 = () => {
    setSeeChapter3(true);
  };

  useEffect(() => {
    if (+age > 18) {
      setValidAge(true);
    } else {
      setValidAge(false);
    }
  }, [age]);

  useEffect(() => {
    if (parseFloat(money) >= 1000) {
      setEnough(true);
    } else {
      setEnough(false);
    }
  }, [money]);

  const actionToSeller = e => {
    if (e.target.alt === 'kill') {
      setRespond('kill');
    } else {
      setRespond('forgive');
    }
  };

  return (
    <div>
      <div className='row fullPage'>
        <p className='m-right'>
          You walk in the long silent corridor to meet with godfather
        </p>
        <img src='images/chapter-2/boss1.jpeg' alt='boss' />
      </div>
      <div className='row fullPage'>
        <img src='images/chapter-2/boss2.jpeg' alt='boss' />
        <div className='column m-left'>
          <p>Asked me my name, I feel myself horrible!</p>
          <form>
            <div className='column'>
              <input
                className='m-bottom m-top'
                placeholder='Name'
                type='text'
                onChange={e => setName(e.target.value)}
              />
              <input
                type='number'
                name='age'
                placeholder='age'
                onChange={e => setAge(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      {name && age && validAge && (
        <div className='row fullPage'>
          <div className='column m-right'>
            <p>Welcome {name} you and we will more dangerous...</p>
            <p className='m-top'>
              You are not look like {age}, you look too young and strong
              <span style={{ fontSize: '2.3rem' }}>&#129409;</span>
            </p>
          </div>
          <img src='images/chapter-2/new-friends.jpeg' alt='new-friends' />
        </div>
      )}
      {name && age && !validAge && (
        <div className='row fullPage'>
          <div className='column m-right'>
            <p>
              You are too young {name} you must go home!!! and stay with your
              mom !!
            </p>
            <p className='m-top'>
              We don't share our life with {age} years old babies !!!
            </p>
          </div>
          <img src='images/chapter-2/bad-boys.jpeg' alt='bad-boys' />
        </div>
      )}
      {name && validAge && (
        <div>
          <div className='row fullPage'>
            <img src='images/chapter-2/classic-car.jpeg' alt='classic-car' />
            <p className='m-left'>
              You will learn how to fight but first should buy a weapon.
            </p>
          </div>
          <div className='row fullPage'>
            <p className='m-right'>
              The seller well-known, he is the boss of weapons.
            </p>
            <img src='images/chapter-2/gun-seller.jpeg' alt='gun-seller' />
          </div>
          <div className='row fullPage'>
            <img src='images/chapter-2/guns.jpeg' alt='guns' />
            <p className='m-left m-right'>
              There are many options. But do you have enogh money.. How will you
              buy?
            </p>
            <img src='images/chapter-2/weapons.jpeg' alt='weapons' />
          </div>
          <div className='column fullPage'>
            <p>The seller asked you?</p>
            <p>How much money do you have ?</p>
            <p>at least you must have 1000$</p>
            <input
              type='number'
              name='money'
              placeholder='How much do you have?'
              onChange={e => setMoney(e.target.value)}
            />
          </div>
        </div>
      )}
      {enough && (
        <div className='column fullPage'>
          <p>You can buy what ever you want boy!</p>
        </div>
      )}
      {!enough && +money > 0 && (
        <div>
          <div className='column fullPage'>
            <p>You are an idiot..</p>
            <p>you can not buy anything with this oney</p>
            <p>he spoke too bad and he insulted you with your frineds...</p>
          </div>
          <div className='column fullPage'>
            <p>You have 2 options</p>
            <div className='row m-top'>
              <div className='column'>
                <img
                  onClick={actionToSeller}
                  className='options-img'
                  src='images/chapter-2/kill.jpeg'
                  alt='kill'
                />
                <p className='m-top'>Kill Him</p>
              </div>
              <div className='column'>
                <img
                  onClick={actionToSeller}
                  className='options-img'
                  src='images/chapter-2/forgive.jpg'
                  alt='never-mind'
                />
                <p className='m-top'>Forgive Him</p>
              </div>
            </div>
          </div>
          {respond === 'forgive' && (
            <div className='column fullPage'>
              <p>You can not be gangster !!</p>
              <p>You are too soft, GO HOME!</p>
            </div>
          )}
        </div>
      )}
      {(enough || respond === 'kill') && (
        <div className='column fullPage'>
          <p>You are hero</p>
          <p>To learn more thing, click on Chapter 3</p>
          <Link to='/chapter3'>
            <button onClick={getChapter3}>Chapter 3</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Chapter2;