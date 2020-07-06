const mongoose = require('mongoose');

const cardShema = new mongoose.Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    required: true,
    type: mongoose.Schema.Types.String,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: '5f02ce1cd6f2bb4c3ca41cb0',
  },
  likes: [{
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardShema);
