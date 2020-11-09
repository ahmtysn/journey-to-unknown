import React, { useState } from 'react';

function CommentFormInput({ addComment }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addComment({
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='What do you think about story ?'
        value={input}
        onChange={handleChange}
        name='text'
        className='comment-input'
      />
      <button onClick={handleSubmit} className='comment-btn'>
        Add Comment
      </button>
    </form>
  );
}

export default CommentFormInput;
