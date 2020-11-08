const moment = require('moment');

const Comment = require('../models/Comment');

const getAllComments = async (req, res, next) => {
  let comments;
  try {
    comments = await Comment.find();
  } catch (err) {
    const error = new Error('Something went wrong, could not find comment!');
    error.status = 500;
    return next(error);
  }

  if (comments.length > 0) {
    res
      .status(200)
      .json(comments.map(comment => comment.toObject({ getters: true })));
  } else {
    const error = new Error({ msg: 'Could not find any comments!' });
    error.status = 404;
    return next(error);
  }
};

const createComment = async (req, res, next) => {
  const comment = new Comment({
    text: req.body.text,
    time: moment().format('h:mm a'),
  });

  try {
    await comment.save();
  } catch (err) {
    const error = new Error(
      'Failed to create new comment, make sure to fill in the field correctly!',
    );
    error.status = 500;
    return next(error);
  }

  res.status(201).json({ comment: comment.toObject({ getters: true }) });
};

const deleteComment = async (req, res, next) => {
  const commentId = req.params.id;

  let comment;
  try {
    comment = await Comment.findById(commentId);
    comment.remove();
  } catch (err) {
    const error = new Error('Something went wrong, could not delete comment!');
    error.status = 500;
    return next(error);
  }

  res.status(200).json({ msg: 'Comment successfully deleted!' });
};

exports.getAllComments = getAllComments;
exports.createComment = createComment;
exports.deleteComment = deleteComment;
