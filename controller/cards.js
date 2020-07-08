const Card = require('../models/user.js');

module.exports.getCard = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const {
    name, link, OwnerId, likesId
  } = req.body;

  Card.create({ name, link, owner: OwnerId, likes: likesId })
    .then((owner) => res.send({ data: owner }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
