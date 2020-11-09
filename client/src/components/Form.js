import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentFormInput from './CommentFormInput';
import Comment from './Comment';

function Form() {
  const [comments, setComments] = useState([]);
  const endPoint = 'http://localhost:5000/';

  useEffect(() => {
    const getAllComments = async () => {
      const response = await axios.get(endPoint);
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
    } = await axios.post(endPoint, { text: comment.text });
    // update list
    setComments(existComment => [newComment, ...existComment]);
  };

  const removeComment = async id => {
    // delete from the backend
    await axios.delete(endPoint + id);
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className='form'>
      <CommentFormInput addComment={addComment} />
      <Comment comments={comments} removeComment={removeComment} />
    </div>
  );
}

export default Form;
