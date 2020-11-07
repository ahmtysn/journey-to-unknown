import React, { useContext } from 'react';
import Direction from '../../components/Direction';
import { OpenContext } from '../../components/OpenContext';

function BuyYourGun() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='column fullPage'>
      <p>You can buy what ever you want boy!</p>
      <Direction
        children='Next'
        path='/chapter3'
        onClick={() => setOpen({ ...open, isOpenC3: true })}
      />
    </div>
  );
}

export default BuyYourGun;
