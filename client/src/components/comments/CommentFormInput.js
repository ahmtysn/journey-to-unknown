import React, { useState } from 'react';

function CommentFormInput({ addComment }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addComment({
      text: input,
    });
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='comment-form'>
        <input
          className='comment-input'
          onChange={e => setInput(e.target.value)}
          placeholder='What do you think about story ?'
          value={input}
        />
        <button className='comment-btn' type='submit'>
          Comment
        </button>
      </form>
    </div>
  );
}

export default CommentFormInput;
