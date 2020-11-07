import React, { useEffect, useState } from 'react';
import Direction from '../../components/Direction';

function TellYourName({ data, setData }) {
  const [isAdult, setIsAdult] = useState(false);
  useEffect(() => {
    if (parseFloat(data.age) >= 18) {
      setIsAdult(true);
    }
  }, [data.age]);

  return (
    <div className='row fullPage'>
      <img src='../images/chapter-2/boss2.jpeg' alt='boss' />
      <div className='column m-left'>
        <p>Asked me my name, I feel myself horrible!</p>
        <form onSubmit={e => console.log('ahmet')}>
          <div className='column'>
            <input
              className='m-bottom m-top'
              placeholder='Name'
              type='text'
              onChange={e => setData({ ...data, name: e.target.value })}
            />
            <input
              type='number'
              name='age'
              placeholder='age'
              onChange={e => setData({ ...data, age: e.target.value })}
            />
          </div>
        </form>
      </div>
      {data.name && data.age && (
        <Direction
          children='Next'
          path={
            data.name && isAdult
              ? '/chapter2/team-members'
              : '/chapter2/too-young'
          }
        />
      )}
    </div>
  );
}

export default TellYourName;
