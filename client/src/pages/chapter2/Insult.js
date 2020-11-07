import React from 'react';
import Direction from '../../components/Direction';

function Insult() {
  return (
    <div className='column fullPage'>
      <p>You are an idiot..</p>
      <p>you can not buy anything with this oney</p>
      <p>he spoke too bad and he insulted you with your frineds...</p>
      <Direction children='Next' path='/chapter2/kill-or-forgive' />
    </div>
  );
}

export default Insult;
