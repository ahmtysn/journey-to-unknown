const express = require('express');

const commentRouter = express.Router();

const {
  getAllComments,
  createComment,
  deleteComment,
} = require('../controllers/commentController');

commentRouter.get('/', getAllComments);
commentRouter.post('/', createComment);
commentRouter.delete('/:id', deleteComment);

module.exports = commentRouter;
