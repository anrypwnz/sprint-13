const Card = require('../models/card.js');

module.exports.getCard = (req, res) => {
  Card.find({})
    .then((data) => res.send({ data }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.delCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send('deleted: ', card))
    .catch((err) => res.status(500).send({ err, message: 'Произошла ошибка' }));
};

module.exports.createCard = async (req, res) => {
  const {
    name, link, OwnerId, likesId,
  } = req.body;
  await Card.create({
    name, link, owner: OwnerId, likes: likesId,
  })
    .then((data) => res.send({ data }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
