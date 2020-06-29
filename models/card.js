const mongoose = require('mongoose');

const cardShema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    required: true,
    type: String,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: [{
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }]
}),

module.exports = mongoose.model('card', cardShema);