import React from 'react';
import Direction from '../../components/Direction';

function SelectGun() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-2/guns.jpeg' alt='guns' />
      <p className='m-left m-right'>
        There are many options. But do you have enough money.. How will you buy?
      </p>
      <img src='../images/chapter-2/weapons.jpeg' alt='weapons' />
      <Direction children='Next' path='/chapter2/8' />
    </div>
  );
}

export default SelectGun;
