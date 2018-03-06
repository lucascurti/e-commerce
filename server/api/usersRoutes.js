const express = require('express');
const router = express.Router();
const Users = require('../db/models/users');

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id).then(user => res.json(user));
});
router.post('/:id', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const rol = req.body.rol;
  Users.create({
    email: email,
    password: password,
    name: name,
    rol: rol,
  }).then(newUser => {
    res.json(newUser);
  });
});
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
