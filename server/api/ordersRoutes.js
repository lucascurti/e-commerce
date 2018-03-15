const express = require('express');
const router = express.Router();
const db = require('../db/models/');
const User = db.User;
const Order = db.Order;
const Product = db.Product;
const OrderDetail = db.OrderDetail;
const moment = require('moment');

router.get('/Uncreated/:userId', (req, res) => {
  //buscar usuario logeado
  Order.findOne({
    include: [
      {
        model: Product,
        attributes: ['name', 'id', 'image'],
      },
    ],
    where: {
      status: 'Uncreated',
      userId: req.params.userId,
    },
  }).then(order => res.json(order));
});

router.post('/', (req, res) => {
  // busca si existe una orden con el userid y con status 'Uncreated'
  Order.findOne({
    where: { status: 'Uncreated', userId: req.body.userId },
  }).then(order => {
    console.log(order);
    //si no se cumple la condicion del where crea una nueva orden
    if (!order) {
      Order.create({
        date: moment().format('DD/MM/YYYY'),
        status: 'Uncreated',
        address: 'adress',
        userId: req.body.userId,
      }).then(newOrder => {
        //le agrega una producto a la orden nueva
        Product.findById(req.body.productId).then(product => {
          OrderDetail.create({
            price: product.price,
            amount: 1,
            productId: product.id,
            orderId: newOrder.id,
          }).then(orderDetail => res.json(orderDetail));
        });
      });
    } else {
      //si existe una orden uncreated y con el id del user
      // le agrega al order detail de esa orden el id el producto
      Product.findById(req.body.productId).then(product => {
        OrderDetail.create({
          price: product.price,
          amount: 1,
          productId: product.id,
          orderId: order.id,
        }).then(orderDetail => res.json(orderDetail));
      });
    }
  });
});

module.exports = router;
