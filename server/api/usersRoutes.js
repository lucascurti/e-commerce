const express = require('express');
const router = express.Router();
const Users = require('../db/models/users');
const passport = require('passport');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id).then(user => res.json(user));
});

router.post('/', (req, res) => {
  Users.create(req.body)
    .then(newUser => {
      res.json(newUser);
    })
    .catch(error => res.json(error));
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body.update;
  Users.findById(id)
    .then(user => {
      return user.updateAttributes(update);
    })
    .then(updatedUser => {
      res.json(updatedUser);
    });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id: id } }).then(deletedUser => {
    res.json(deletedUser);
  });
});
router.get('/:id/orders', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => user.getOrders())
    .then(orders => res.json(orders));
});

module.exports = router;
