import React, { useContext } from 'react';
import Direction from '../../components/Direction';
import { OpenContext } from '../../components/OpenContext';

function GoodFeelings() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='column fullPage goodFeelings'>
      <p>You feel very relaxed. Now your mother can sleep peacefully.</p>
      <Direction
        children='Next'
        path='/chapter4'
        onClick={() => setOpen({ ...open, isOpenC4: true })}
      />
    </div>
  );
}

export default GoodFeelings;
