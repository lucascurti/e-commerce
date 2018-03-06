const User = require('./users');
const Review = require('./reviews');
const Product = require('./products');
const Order = require('./orders');
const Categorie = require('./categories');

User.hasMany(Review, { as: 'review' });
User.hasMany(Order, { as: 'orders' });
Review.belongsTo(Product, { as: 'product' });
Review.belongsTo(User, { as: 'user' });
Product.belongsToMany(Order, { as: 'orders', through: 'order_product' });
Product.belongsTo(Categorie, { as: 'categorie' });
Product.hasMany(Review, { as: 'reviews' });
Order.belongsToMany(Product, { as: 'product', through: 'order_product' });
Order.belongsTo(User, { as: 'user' });

module.export = {
  User,
  Review,
  Product,
  Order,
  Categorie,
};
