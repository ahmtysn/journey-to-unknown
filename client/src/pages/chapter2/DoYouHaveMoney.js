import React, { useEffect, useState } from 'react';
import Direction from '../../components/Direction';

function DoYouHaveMoney({ data, setData }) {
  const [isEnoughMoney, setIsEnoughMoney] = useState(false);
  useEffect(() => {
    if (parseFloat(data.money) >= 1000) {
      setIsEnoughMoney(true);
    }
  }, [data.money]);
  return (
    <div className='column fullPage'>
      <p>The seller asked you?</p>
      <p>How much money do you have ?</p>
      <p>at least you must have 1000$</p>
      <input
        type='number'
        name='money'
        placeholder='How much do you have?'
        onChange={e => setData({ ...data, money: e.target.value })}
      />
      {data.money && (
        <Direction
          children='Next'
          path={isEnoughMoney ? '/chapter2/buy-your-gun' : '/chapter2/insult'}
        />
      )}
    </div>
  );
}

export default DoYouHaveMoney;
