const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
