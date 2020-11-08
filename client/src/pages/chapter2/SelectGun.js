import React from 'react';
import Direction from '../../components/Direction';

function SelectGun() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-2/guns.jpeg' alt='guns' />
      <p className='m-left m-right'>
        There are many kinds of weapons. You can buy any weapon you want. But is
        your money enough?
      </p>
      <img src='../images/chapter-2/weapons.jpeg' alt='weapons' />
      <Direction title='Next' path='/chapter2/do-you-have-money' />
    </div>
  );
}

export default SelectGun;
