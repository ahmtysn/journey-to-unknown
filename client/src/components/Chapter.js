import React from 'react';
import Next from './Next';

function Chapter({ chapter, info, path }) {
  return (
    <div className='column fullPage'>
      <h1>Chapter {chapter}</h1>
      <h4>{info}</h4>
      <Next path={path} />
    </div>
  );
}

export default Chapter;
