const express = require('express');
const router = express.Router();
const db = require('../db/models/');
const User = db.User;
const Order = db.Order;
const Product = db.Product;


router.get('/Uncreated', (req, res) => {
    //buscar usuario logeado
    Order.findOne(
        {
            include: [{
                model: Product,
                as: 'product'
            }],
            where: {
                status: 'Uncreated',
            }
        }
    ).then(order => res.json(order))
})

module.exports = router;
