import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../../components/OpenContext';
// import Direction from '../../components/Direction';

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
          Maybe you should join this man to avenge your mother.
        </p>
      </div>
      <div className='row'>
        <Link to='/chapter2'>
          <img
            className='yes-no-img m-top'
            src='../images/chapter-1/yes.jpg'
            alt='yes'
            onClick={() => setOpen({ ...open, isOpenC2: true })}
          />
        </Link>
        <Link to='/go-home'>
          <img
            className='yes-no-img m-left m-top'
            src='../images/chapter-1/no.jpg'
            alt='no'
          />
        </Link>
      </div>
    </div>
  );
}

export default Offer;
