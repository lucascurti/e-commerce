const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const productsRoutes = require('./api/productsRoutes');
const usersRoutes = require('./api/usersRoutes');
const ordersRoutes = require('./api/ordersRoutes');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('api/products', productsRoutes);
app.use('api/users', usersRoutes);
app.use('api/orders', ordersRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});
// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000, () => console.log('Example app listeningemilinoort 4000!'));
