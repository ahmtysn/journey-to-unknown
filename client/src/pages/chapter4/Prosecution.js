import React from 'react';
import Direction from '../../components/Direction';

function Prosecution() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        At court, the judge asks very difficult questions about the gang you are
        a member of.
      </p>
      <img src='../images/chapter-4/questioning.jpeg' alt='questioning' />
      <Direction title='Next' path='/chapter4/defence' />
    </div>
  );
}

export default Prosecution;
