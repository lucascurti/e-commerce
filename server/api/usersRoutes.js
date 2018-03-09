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

router.post('/login', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return json({
        success: false,
        message: err.message,
        info,
      });
    }
    if (!user) {
      return res.json({
        success: false,
        info,
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.json(err);
      }
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        info,
        user,
      });
    });
  })(req, res, next);
});

/* router.post('/login', function(req, res, next) {
  return passport.authenticate('local', (err, token, userData) => {
    console.log(err);
    console.log(token);
    console.log(userData);
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.',
        error: err,
      });
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData,
    });
  })(req, res, next);
}); */

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
