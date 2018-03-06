var Sequelize = require('sequelize');
var db = require('../database');
var Review = require('./users');
var Order = require('./orders');

var User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  rol: {
    type: Sequelize.STRING,
    defaultValue: 'user',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;
