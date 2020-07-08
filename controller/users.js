const User = require('../models/user.js');

module.exports.User = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((owner) => res.send({ data: owner }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createUser = async (req, res) => {
  try {
    const created = await User.create(req.body);
    if (created) {
      res.send('created well');
    } else {
      res.status(500).send('create error');
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ err, message: 'Произошла ошибка' }));
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};
