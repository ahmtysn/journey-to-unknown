import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentHeader from './CommentHeader';
import CommentFormInput from './CommentFormInput';
import Comment from './Comment';

function Form() {
  const [comments, setComments] = useState([]);
  const ENDPOINT = 'https://interactive-mafia-story.herokuapp.com/';

  useEffect(() => {
    const getAllComments = async () => {
      const response = await axios.get(ENDPOINT);
      const comments = response.data;
      setComments(comments);
      console.log({ comments });
    };
    getAllComments();
  }, []);

  const addComment = async comment => {
    if (!comment.text || !comment.text.trim()) {
      return;
    }
    // send data to backend
    const {
      data: { comment: newComment },
    } = await axios.post(ENDPOINT, { text: comment.text });
    // update list
    setComments(existComment => [newComment, ...existComment]);
  };

  const removeComment = async id => {
    // delete from the backend
    await axios.delete(ENDPOINT + id);
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className='form'>
      <CommentHeader />
      <div>
        <CommentFormInput addComment={addComment} />
        <Comment comments={comments} removeComment={removeComment} />
      </div>
    </div>
  );
}

export default Form;
