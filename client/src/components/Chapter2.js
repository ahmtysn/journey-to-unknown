import React, { useState, useEffect } from 'react';

function Chapter2() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [validAge, setValidAge] = useState(false);

  useEffect(() => {
    if (+age > 18) {
      setValidAge(true);
    } else {
      setValidAge(false);
    }
  }, [age]);

  return (
    <div>
      <div className='row fullPage'>
        <p className='m-right'>
          You walk in the long silent corridor to meet with godfather
        </p>
        <img src='images/boss/boss.jpeg' alt='' />
      </div>
      <div className='row fullPage'>
        <img src='images/boss/boss2.jpeg' alt='' />
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
              You are not look like {age}
              <span style={{ fontSize: '2.3rem' }}>&#129409;</span>
            </p>
          </div>
          <img src='images/choice/gangster.jpeg' alt='' />
        </div>
      )}
      {name && age && !validAge && (
        <div className='row fullPage'>
          <div className='column m-right'>
            <p>You are too young {name} you should go home!!!</p>
            <p className='m-top'>
              We can not work with {age} years old young boy...
            </p>
          </div>
          <img src='images/choice/gangster.jpeg' alt='' />
        </div>
      )}
    </div>
  );
}

export default Chapter2;
