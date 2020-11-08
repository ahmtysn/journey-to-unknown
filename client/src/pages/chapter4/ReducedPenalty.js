import React from 'react';
import Direction from '../../components/Direction';

function ReducedPenalty() {
  return (
    <div className='row fullPage'>
      <p className='m-right'>
        Due to the important information you gave and your regret, the 30-year
        sentence dropped to 10 years.
      </p>
      <img src='../images/chapter-4/query.jpeg' alt='query' />
      <Direction title='Next' path='/chapter4/dead-end' />
    </div>
  );
}

export default ReducedPenalty;
