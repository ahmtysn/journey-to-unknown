import React from 'react';
import Direction from '../../components/Direction';

function TooYoung({ data, setData }) {
  const clearData = () => {
    setData({ name: '', age: '', money: '' });
  };
  return (
    <div className='row fullPage'>
      <div className='column m-right'>
        <p>
          You are a child. Come on go home. Don't linger around here too much!
        </p>
      </div>
      <img src='../images/chapter-2/bad-boys.jpeg' alt='bad-boys' />
      <Direction onClick={clearData} children='Try Again' path='/chapter2' />
    </div>
  );
}

export default TooYoung;
