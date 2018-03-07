const Categories = require('./models/categories');

Categories.bulkCreate([
  { name: 'ropa' },
  { name: 'accesorios' },
  { name: 'zapatillas' },
])
  .then(() => {
    return Categories.findAll();
  })
  .then(categories => {
    console.log(categories);
  });
