import React from 'react';
import Direction from '../../components/Direction';

function TooYoung({ data, setData }) {
  const clearData = () => {
    setData({ name: '', age: '', money: '' });
  };
  return (
    <div className='row fullPage'>
      <div className='column m-right'>
        <p>You are too young you must go home!!! and stay with your mom !!</p>
        <p className='m-top'>
          We don't share our life with years old babies !!!
        </p>
      </div>
      <img src='../images/chapter-2/bad-boys.jpeg' alt='bad-boys' />
      <Direction onClick={clearData} children='Try Again' path='/chapter2' />
    </div>
  );
}

export default TooYoung;
