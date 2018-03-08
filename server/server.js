const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const productsRoutes = require('./api/productsRoutes');
const usersRoutes = require('./api/usersRoutes');
const ordersRoutes = require('./api/ordersRoutes');
const db = require('./db/database');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

db
  .sync({ force: false })
<<<<<<< HEAD
  .then(function() {
    app.listen(4000, function() {
=======
  .then(function () {
    app.listen(4000, function () {
>>>>>>> 31577b6ccac3d0e3195cb75c290429c6b997f612
      console.log('Server is listening on port 4000!');
    });
  })
  .catch(console.error);
