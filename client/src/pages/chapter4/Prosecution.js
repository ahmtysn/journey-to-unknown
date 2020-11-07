import React from 'react';
import Direction from '../../components/Direction';

function Prosecution() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        Judge asked you ? Are you regret? Who is your boss ? with who do you
        work?
      </p>
      <img src='../images/chapter-4/questioning.jpeg' alt='questioning' />
      <Direction children='Next' path='/chapter4/defence' />
    </div>
  );
}

export default Prosecution;
