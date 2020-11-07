import React, { useContext } from 'react';
import Direction from '../components/Direction';
import { OpenContext } from '../components/OpenContext';

function Home() {
  const { open, setOpen } = useContext(OpenContext);

  return (
    <div className='column head fullPage'>
      <h1>JOURNEY to UNKNOWN</h1>
      <Direction
        children='Start'
        path='/chapter1'
        onClick={() => setOpen({ ...open, isOpenC1: true })}
      />
    </div>
  );
}

export default Home;
