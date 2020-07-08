const router = require('express').Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    console.error(e);
  }
});

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ err, message: 'Произошла ошибка' }));
});

router.post('/users', async (req, res) => {
  try {
    console.log(req.body);
    const created = await User.create(req.body);
    if (created) {
      res.send('create ok');
    } else {
      res.status(500).send('create error');
    }
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
