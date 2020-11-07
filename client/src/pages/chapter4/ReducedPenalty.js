import React from 'react';
import Direction from '../../components/Direction';

function ReducedPenalty() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        You are regret and now you have discount from 30 years to 10 years
        sentences. Your friends will not help you you told everything. Maybe you
        can die in prison accidently?
      </p>
      <img src='../images/chapter-4/query.jpeg' alt='query' />
      <Direction children='Next' path='/chapter4/dead-end' />
    </div>
  );
}

export default ReducedPenalty;
