import React, { useContext } from 'react';
import Direction from '../../components/Direction';
import { OpenContext } from '../../components/OpenContext';

function BuyYourGun() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        Now I have a gun... I'm more confident in myself.
      </p>
      <img src='../images/chapter-2/buy-gun.jpg' alt='buy-gun' />
      <Direction
        children='Next'
        path='/chapter3'
        onClick={() => setOpen({ ...open, isOpenC3: true })}
      />
    </div>
  );
}

export default BuyYourGun;
