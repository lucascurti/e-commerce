const express = require('express');
const router = express.Router();
const Products = require('../db/models/products');
const Categories = require('../db/models/categories');

router.get('/', (req, res) => {
  Products.findAll({
    include: [{ model: Categories }],
  }).then(products => {
    res.send(products);
  });
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Products.findById(id, {
    include: [{ model: Categories }],
  }).then(product => {
    res.json(product);
  });
});
router.post('/', (req, res) => {
  console.log(req.body);
  let newProductId;
  Products.create(req.body)
    .then(newProduct => {
      newProductId = newProduct.id;
      console.log('newProdId', newProductId);
      return req.body.categories.map(category => {
        return newProduct.addCategory(category);
      });
    })
    .then(categories => {
      return Promise.all(categories);
    })
    .then(() => Products.findById(newProductId))
    .then(newProduct => res.send(newProduct))
    .catch(err => res.status(500).send(err));
});
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const categories = req.body.categories;
  const updatedProduct = req.body;
  delete updatedProduct.categories;

  Products.update(
    {
      name: req.body.name,
      description: req.body.description,
      stock: req.body.stock,
      price: req.body.price,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    },
  )
    .then(response => {
      const product = response[1][0];
      res.json(product);
    })
    .catch(err => res.send(err.message));
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
