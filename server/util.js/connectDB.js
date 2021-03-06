const mongoose = require('mongoose');

const DB_URL = `mongodb+srv://hyfuser:hyfpassword@cluster0.gb9s6.mongodb.net/interactive-story`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

const connectDB = server => {
  mongoose
    .connect(DB_URL, options)
    .then(() => server())
    .catch(err => console.log('err happened in db connection!', err));
};

module.exports = connectDB;
