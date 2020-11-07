import React, { useContext } from 'react';
import Direction from '../../components/Direction';
import { OpenContext } from '../../components/OpenContext';

function GoodFeelings() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='column fullPage'>
      <p>You feel yourself free. You take your revenge. Mom sleep wel.</p>
      <Direction
        children='Next'
        path='/chapter4'
        onClick={() => setOpen({ ...open, isOpenC4: true })}
      />
    </div>
  );
}

export default GoodFeelings;
