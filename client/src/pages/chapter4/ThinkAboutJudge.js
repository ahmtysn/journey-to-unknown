import React from 'react';
import Direction from '../../components/Direction';

function ThinkAboutJudge() {
  return (
    <div className='row fullPage'>
      <img src='../images/chapter-4/prison3.jpeg' alt='prison' />
      <p className='m-right m-left'>
        You have a lot of time to think in prison. Will you always stay here
        from now on?
      </p>
      <img src='../images/chapter-4/prison1.jpeg' alt='prison' />
      <Direction title='Next' path='/chapter4/prosecution' />
    </div>
  );
}

export default ThinkAboutJudge;
