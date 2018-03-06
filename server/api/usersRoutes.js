const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  db.users.findById(id).then(user => res.json(user));
});
router.post('/users/:id', (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  const name = req.params.name;
  const rol = req.params.rol;
  db.users
    .create({
      email: email,
      password: password,
      name: name,
      rol: rol,
    })
    .then(newUser => {
      res.json(newUser);
    });
});
router.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body.update;
  db.users
    .findById(id)
    .then(user => {
      return user.updateAttributes(update);
    })
    .then(updatedUser => {
      res.json(updatedUser);
    });
});
router.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  db.users.destroy({ where: { id: id } }).then(deletedUser => {
    res.json(deletedUser);
  });
});
router.get('/users/:id/orders', (req, res) => {
  const id = req.params.id;
  db.users
    .findById(id)
    .then(user => user.getOrders())
    .then(orders => res.json(orders));
});
