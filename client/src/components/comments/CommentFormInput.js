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
        <textarea
          className='text-area'
          onChange={e => setInput(e.target.value)}
          placeholder='What do you think about story ?'
          value={input}
          cols='10'
          rows='20'
        ></textarea>
        <button onClick={handleSubmit}>Add Comment</button>
      </form>
    </div>
  );
}

export default CommentFormInput;
