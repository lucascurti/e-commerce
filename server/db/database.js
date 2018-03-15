'use strict';

var config = require('../../config.json');
var Sequelize = require('sequelize');

// module.exports = new Sequelize(config.database, config);
module.exports = new Sequelize(
  'postgres://lostopos:example@pg:5432/ecommerce',
  {
    // disable logging; default: console.log
    logging: true,
  },
);
