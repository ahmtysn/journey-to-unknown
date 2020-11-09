import React from 'react';
import Direction from '../../components/Direction';

function TeamMembers({ data }) {
  return (
    <div className='row fullPage'>
      <div className='column m-right'>
        <p>
          Welcome
          <span style={{ fontWeight: 'bolder', fontSize: '1.6rem' }}>
            {' '}
            {data.name}{' '}
          </span>
          you look younger than
          <span style={{ fontWeight: 'bolder', fontSize: '1.6rem' }}>
            {' '}
            {data.age}
          </span>
        </p>
        <p className='m-top'>Then everyone started to congratulate you!</p>
      </div>
      <img src='../images/chapter-2/welcome.jpeg' alt='welcome' />
      <Direction title='Next' path='/chapter2/go-seller' />
    </div>
  );
}

export default TeamMembers;
