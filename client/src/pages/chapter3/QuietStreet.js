import React from 'react';
import Direction from '../../components/Direction';

function QuietStreet() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-3/quit-street.jpeg' alt='quit-street' />
      <p className='m-left'>
        You wait to much in the quit street.But You saw them and you want to
        revenge.
      </p>
      <Direction children='Next' path='/chapter3/remember-mom' />
    </div>
  );
}

export default QuietStreet;
