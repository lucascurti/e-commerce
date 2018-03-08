const Categories = require('./models/categories');
const Products = require('./models/products');

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
Products.bulkCreate([
  {
    name: 'musculosa italiana',
    description: 'amarilla',
    price: 200,
    stock: 5,
    image: 'asdasdsads',
  },
  {
    name: 'zapatilla reebok',
    description: 'roja',
    price: 1500,
    stock: 1,
    image: 'asdasdsads',
  },
  {
    name: 'pulsera',
    description: 'oro',
    price: 4000,
    stock: 5,
    image: 'asdasdsads',
  },
])
  .then(() => {
    return Categories.findAll();
  })
  .then(categories => {
    console.log(categories);
  });