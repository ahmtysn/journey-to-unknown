import React from 'react';
import Direction from './Direction';

function Chapter({ chapter, info, path, className }) {
  return (
    <div className={className}>
      <h1>Chapter - {chapter}</h1>
      <h4>{info}</h4>
      <Direction children='Next' path={path} />
    </div>
  );
}

export default Chapter;
