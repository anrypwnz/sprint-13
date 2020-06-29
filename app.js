const express = require('express');
const mongoose = require('mongoose');

const app = express();
const path = require('path');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(cards);
app.use(users);
app.all('*', (req, res, next) => {
  res.status(404).send({ 'message': 'Запрашиваемый ресурс не найден' });
  next();
});

app.listen(PORT);
