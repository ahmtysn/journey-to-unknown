import React, { useEffect, useRef, useState } from 'react';
import Direction from '../../components/Direction';

function TellYourName({ data, setData }) {
  const [isAdult, setIsAdult] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (parseFloat(data.age) >= 18) {
      setIsAdult(true);
    }
  }, [data.age]);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className='row fullPage'>
        <img src='../images/chapter-2/boss2.jpeg' alt='boss' />
        <div className='column m-left'>
          <p>This silence is broken by his question of my name and age.</p>
          <div className='column'>
            <input
              className='m-bottom m-top'
              placeholder='Name'
              type='text'
              onChange={e => setData({ ...data, name: e.target.value })}
              ref={nameInputRef}
            />
            <input
              type='number'
              name='age'
              placeholder='Age'
              onChange={e => setData({ ...data, age: e.target.value })}
            />
          </div>
        </div>
        {data.name && data.age && (
          <Direction
            title='Next'
            autoFocus={false}
            type='submit'
            path={
              data.name && isAdult
                ? '/chapter2/team-members'
                : '/chapter2/too-young'
            }
          />
        )}
      </div>
    </form>
  );
}

export default TellYourName;
