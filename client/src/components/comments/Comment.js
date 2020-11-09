import React from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ comments, removeComment }) => {
  return comments.map(comment => (
    <div key={comment.id} className='comment'>
      <div className='delete-icon'>
        <RiCloseCircleLine
          onClick={() => removeComment(comment.id)}
          className='delete-icon'
        />
      </div>
      <div>
        <div>{comment.text}</div>
        <div className='comment-time'>{comment.time}</div>
      </div>
    </div>
  ));
};

export default Todo;
