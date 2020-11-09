import React from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ comments, removeComment }) => {
  return (
    <div className='comments'>
      {comments.map(comment => (
        <div key={comment.id}>
          <div className='comment'>
            <div className='delete-icon'>
              <RiCloseCircleLine
                onClick={() => removeComment(comment.id)}
                className='delete-icon'
              />
            </div>
            <div className='comment-text'>
              <div>{comment.text}</div>
              <div className='comment-time'>{comment.time}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
