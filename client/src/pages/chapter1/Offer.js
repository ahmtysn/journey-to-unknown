import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../../components/OpenContext';
import Direction from '../../components/Direction';

function Offer() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='column fullPage'>
      <div className='row'>
        <p className='m-right'>
          One day a strange looking man offered you to join him.
        </p>
        <img src='../images/chapter-1/offer.png' alt='offer' />
        <p className='m-left'>
          Maybe you should join this guy so you can avenge your mother.
        </p>
      </div>
      <div className='row'>
        <Direction
          path='/chapter2'
          title='YES'
          bottomRight={false}
          onClick={() => setOpen({ ...open, isOpenC2: true })}
        />
        <Direction path='/go-home' title='NO' bottomRight={false} />
      </div>
    </div>
  );
}

export default Offer;
