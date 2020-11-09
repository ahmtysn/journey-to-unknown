import React from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ comments, removeComment }) => {
  return (
    <div className='comment-container'>
      {comments.map(comment => (
        <div className='comment' key={comment.id}>
          <div className='delete-text'>
            <div className='delete-icon'>
              <RiCloseCircleLine
                onClick={() => removeComment(comment.id)}
                className='delete-icon'
              />
            </div>
            <div>{comment.text}</div>
          </div>
          <div className='comment-time'>{comment.time}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
