var Sequelize = require('sequelize');
var db = require('../database');

var Categorie = db.define('categorie', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

//Categorie.hasMany(Product, { as: 'product' });

module.exports = Categorie;
