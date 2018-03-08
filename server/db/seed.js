const Categories = require('./models/categories');
const Products = require('./models/products');

Categories.bulkCreate([
  { name: 'ropa' },
  { name: 'accesorios' },
  { name: 'zapatillas' },
  { name: 'electrodomesticos' },
])
  .then(() => {
    return Categories.findAll();
  })
  .then(categories => {
    console.log(categories);
  });
<<<<<<< HEAD
=======

>>>>>>> fb000a5d3229075dd0601322cadb8aaac40a5898
Products.bulkCreate([
  {
    name: 'musculosa italiana',
    description: 'amarilla',
    price: 200,
    stock: 5,
    image: 'asdasdsads',
<<<<<<< HEAD
=======
    rating: 2,
>>>>>>> fb000a5d3229075dd0601322cadb8aaac40a5898
  },
  {
    name: 'zapatilla reebok',
    description: 'roja',
    price: 1500,
    stock: 1,
    image: 'asdasdsads',
<<<<<<< HEAD
=======
    rating: 1,
>>>>>>> fb000a5d3229075dd0601322cadb8aaac40a5898
  },
  {
    name: 'pulsera',
    description: 'oro',
    price: 4000,
    stock: 5,
    image: 'asdasdsads',
<<<<<<< HEAD
=======
    rating: 4,
>>>>>>> fb000a5d3229075dd0601322cadb8aaac40a5898
  },
])
  .then(() => {
    return Categories.findAll();
  })
  .then(categories => {
    console.log(categories);
  });
<<<<<<< HEAD
=======
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
>>>>>>> fb000a5d3229075dd0601322cadb8aaac40a5898
