import React, { useContext } from 'react';
import Direction from '../components/Direction';
import { OpenContext } from '../components/OpenContext';

function GoHome() {
  const { open } = useContext(OpenContext);
  const { isOpenC1, isOpenC2, isOpenC3, isOpenC4 } = open;
  let path;
  if (isOpenC3) {
    path = './chapter3/revenge';
  } else if (isOpenC2) {
    path = './chapter2/kill-or-forgive';
  } else if (isOpenC1) {
    path = './chapter1/offer';
  } else {
    path = '/';
  }
  return (
    <div className='column fullPage'>
      <img src='/images/coward.jpg' alt='coward' />
      <h3>You are a coward</h3>
      <h3>GO HOME !</h3>
      <Direction path={path} children='Try Again' />
    </div>
  );
}

export default GoHome;
