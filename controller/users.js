const Owner = require('../models/user.js');

module.exports.getOwner = (req, res) => {
  Owner.find({})
    .populate(['owner', 'likes'])
    .then((owner) => res.send({ data: owner }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.Owner = (req, res) => {
  const { name, about, avatar } = req.body;

  Owner.create({ name, about, avatar })
    .populate('owner')
    .then((owner) => res.send({ data: owner }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
