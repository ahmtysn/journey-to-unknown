import React from 'react';
import Direction from '../../components/Direction';

function KingOfJail() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/jail.jpeg' alt='jail' />
      <p className='m-left'>
        You are greeted like kings in prison. Everyone was shouting your name as
        a hero.
      </p>
      <Direction children='Next' path='/chapter4/bribe' />
    </div>
  );
}

export default KingOfJail;
