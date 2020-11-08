import React from 'react';
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';

function GoHome() {
  return (
    <div className='column fullPage'>
      <img src='/images/coward.jpg' alt='coward' />
      <h3>You are a coward</h3>
      <h3>GO HOME !</h3>
      <Direction path='/' children='Try Again' />
    </div>
  );
}

export default GoHome;
