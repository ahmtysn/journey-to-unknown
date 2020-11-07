import React from 'react';
import Direction from '../../components/Direction';

function TeamMembers() {
  return (
    <div className='row fullPage'>
      <div className='column m-right'>
        <p>Welcome you and we will more dangerous...</p>
        <p className='m-top'>
          You are not look like, you look too young and strong
        </p>
      </div>
      <img src='../images/chapter-2/new-friends.jpeg' alt='new-friends' />
      <Direction children='Next' path='/chapter2/go-seller' />
    </div>
  );
}

export default TeamMembers;
