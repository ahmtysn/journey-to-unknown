import React from 'react';
import Direction from '../../components/Direction';

function ThinkAboutJudge() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/prison3.jpeg' alt='prison' />
      <p className='m-right m-left'>
        Now you have time to think..What will you do in judge ?
      </p>
      <img src='../images/chapter-4/prison1.jpeg' alt='prison' />
      <Direction children='Next' path='/chapter4/prosecution' />
    </div>
  );
}

export default ThinkAboutJudge;
