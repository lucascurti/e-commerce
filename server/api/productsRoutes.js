const express = require('express');
const router = express.Router();
const Products = require('../db/models/products');

router.get('/', (req, res) => {
  Products.findAll().then(products => {
    res.send(products);
  });
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Products.findById(id).then(product => {
    res.send(product);
  });
});
router.post('/', (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const stock = req.body.stock;
  const image = req.body.image;
  Products.create({
    name: name,
    description: description,
    price: price,
    stock: stock,
    image: image,
  }).then(newProduct => {
    res.send(newProduct);
  });
});
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body.update;
  Products.findById(id)
    .then(products => {
      return products.updateAttributes(update);
    })
    .then(updatedProduct => {
      res.json(updatedProduct);
    });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Products.destroy({
    where: { id: id },
  })
    .then(deletedProduct => {
      res.json(deletedProduct);
    })
    .catch(res.send);
});

module.exports = router;
