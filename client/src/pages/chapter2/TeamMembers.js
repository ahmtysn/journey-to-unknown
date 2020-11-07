import React from 'react';
import Direction from '../../components/Direction';

function TeamMembers({ data }) {
  return (
    <div className='row fullPage'>
      <div className='column m-right'>
        <p>
          Welcome{' '}
          <span style={{ fontWeight: 'bolder', fontSize: '1.6rem' }}>
            {data.name}
          </span>
          and we will more dangerous...
        </p>
        <p className='m-top'>
          You are not look like{' '}
          <span style={{ fontWeight: 'bolder', fontSize: '1.6rem' }}>
            {data.age}
          </span>
          , you look too young and strong
        </p>
      </div>
      <img src='../images/chapter-2/new-friends.jpeg' alt='new-friends' />
      <Direction children='Next' path='/chapter2/go-seller' />
    </div>
  );
}

export default TeamMembers;
