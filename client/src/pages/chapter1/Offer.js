import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../../components/OpenContext';

function Offer() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='column fullPage'>
      <div className='row'>
        <img src='../images/chapter-1/offer.png' alt='offer' />
        <p className='m-left'>An interesting offer, Do you want to join us ?</p>
      </div>
      <div className='row'>
        <Link to='/chapter2'>
          <button onClick={() => setOpen({ ...open, isOpenC2: true })}>
            YES
          </button>
        </Link>
        <Link to='/go-home'>
          <button>NO</button>
        </Link>
      </div>
    </div>
  );
}

export default Offer;
