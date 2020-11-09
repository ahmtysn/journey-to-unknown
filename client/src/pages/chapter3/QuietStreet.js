import React from 'react';
import Direction from '../../components/Direction';

function QuietStreet() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/quit-street.jpeg' alt='quit-street' />
      <p className='m-left'>
        You started to wait in front of the place where they had fun at
        midnight. Yes there it is! Both of them were standing right in front of
        you.
      </p>
      <Direction title='Next' path='/chapter3/remember-mom' />
    </div>
  );
}

export default QuietStreet;
