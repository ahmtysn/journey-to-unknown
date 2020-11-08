import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../../components/OpenContext';

function KillOrForgive() {
  const { open, setOpen } = useContext(OpenContext);
  return (
    <div className='column fullPage options'>
      <h2>
        You're so angry at the man's words. What are you going to do now ?
      </h2>
      <div className='row m-top'>
        <div className='column'>
          <Link to='/chapter3'>
            <img
              className='options-img'
              src='../images/chapter-2/kill.jpeg'
              alt='kill'
              onClick={() => setOpen({ ...open, isOpenC3: true })}
            />
          </Link>
          <p className='m-top'>Kill Him</p>
        </div>
        <div className='column'>
          <Link to='/chapter2/too-young'>
            <img
              className='options-img m-left'
              src='../images/chapter-2/escape.jpeg'
              alt='never-mind'
            />
          </Link>
          <p className='m-top m-left'>Escape</p>
        </div>
      </div>
    </div>
  );
}

export default KillOrForgive;
