const User = require('./users');
const Review = require('./reviews');
const Product = require('./products');
const Order = require('./orders');
const Category = require('./categories');

User.hasMany(Review, { as: 'review' });
User.hasMany(Order, { as: 'orders' });
Review.belongsTo(Product, { as: 'product' });
Review.belongsTo(User, { as: 'user' });
Product.belongsToMany(Order, { as: 'orders', through: 'order_product' });

Product.belongsToMany(Category, {
  through: 'products_categories',
});
Category.belongsToMany(Product, { through: 'products_categories' });

Product.hasMany(Review, { as: 'reviews' });
Order.belongsToMany(Product, { as: 'product', through: 'order_product' });
Order.belongsTo(User, { as: 'user' });

module.export = {
  User,
  Review,
  Product,
  Order,
  Category,
};
