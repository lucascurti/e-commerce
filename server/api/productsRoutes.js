const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/products', (req, res) => {
  db.products.findAll().then(products => {
    res.json(products);
  });
});
router.get('/products/:id', (req, res) => {
  const id = req.params.id;
  db.owners.findById(id).then(products => {
    res.json(products);
  });
});
router.post('/products/:id', (req, res) => {
  const name = req.params.name;
  const description = req.params.description;
  const price = req.params.price;
  const stock = req.params.stock;
  const image = req.body.image;
  db.products
    .create({
      name: name,
      description: description,
      price: price,
      stock: stock,
      image: image,
    })
    .then(newProduct => {
      res.json(newProduct);
    });
});
router.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body.update;
  db.products
    .findById(id)
    .then(products => {
      return products.updateAttributes(update);
    })
    .then(updatedProduct => {
      res.json(updatedProduct);
    });
});
router.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  db.products
    .destroy({
      where: { id: id },
    })
    .then(deletedProduct => {
      res.json(deletedProduct);
    });
});
