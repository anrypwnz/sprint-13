const router = require('express').Router();

const Card = require('../models/card');

router.get('/cards', (req, res) => {
  Card.find({})
    .then((card) => res.send({ card }))
    .catch((err) => res.status(500).send({ err, message: 'Произошла ошибка' }));
});

router.delete('/cards/:id', (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send('deleted', card))
    .catch((err) => res.status(500).send({ err, message: 'Произошла ошибка' }));
});

router.post('/cards', async (req, res) => {
  try {
    const created = await Card.create(req.body);
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
