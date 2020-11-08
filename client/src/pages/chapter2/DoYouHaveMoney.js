import React, { useEffect, useRef, useState } from 'react';
import Direction from '../../components/Direction';

function DoYouHaveMoney({ data, setData }) {
  const [isEnoughMoney, setIsEnoughMoney] = useState(false);
  const moneyInputRef = useRef(null);

  useEffect(() => {
    moneyInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (parseFloat(data.money) >= 1000) {
      setIsEnoughMoney(true);
    }
  }, [data.money]);
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className='row fullPage'>
        <img
          className='m-right'
          src='../images/chapter-2/gunSeller.jpg'
          alt='gunSeller'
        />
        <div className='column '>
          <p className='m-bottom'>
            The seller said there should be at least $1000. And asked how much
            money I have ?
          </p>
          <input
            type='number'
            name='money'
            placeholder='How much do you have?'
            ref={moneyInputRef}
            onChange={e => setData({ ...data, money: e.target.value })}
          />
        </div>
        {data.money && (
          <Direction
            title='Next'
            autoFocus={false}
            type='submit'
            path={isEnoughMoney ? '/chapter2/buy-your-gun' : '/chapter2/insult'}
          />
        )}
      </div>
    </form>
  );
}

export default DoYouHaveMoney;
