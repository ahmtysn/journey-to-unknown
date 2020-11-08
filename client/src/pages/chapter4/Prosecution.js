import React from 'react';
import Direction from '../../components/Direction';

function Prosecution() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        In court judge asks too difficult questions about the gang of which you
        are a member.
      </p>
      <img src='../images/chapter-4/questioning.jpeg' alt='questioning' />
      <Direction title='Next' path='/chapter4/defence' />
    </div>
  );
}

export default Prosecution;
