const express = require('express');
const app = express();
const connectDB = require('./util.js/connectDB');
const enableCORS = require('./util.js/enableCORS');
const commentRouter = require('./routes/commentRouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(enableCORS);

app.use('/', commentRouter);

const PORT = process.env.PORT || 5000;

const server = () => {
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}!`);
  });
};

connectDB(server);
