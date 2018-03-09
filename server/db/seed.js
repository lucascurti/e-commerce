const Categories = require('./models/categories');
const Products = require('./models/products');

// Categories.bulkCreate([
//   { name: 'ropa' },
//   { name: 'accesorios' },
//   { name: 'zapatillas' },
//   { name: 'electrodomesticos' },
// ])
//   .then(() => {
//     return Categories.findAll();
//   })
//   .then(categories => {
//     console.log(categories);
//   });

Products.bulkCreate([
  {
    id: 100,
    name: 'Zapatillas de Running Floatride Run',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1200,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw3fa628dd/zoom/BS8120_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 101,
    name: 'Zapatillas de Crossfit',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1500,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwfc263f3f/zoom/BS8405_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 102,
    name: 'Zapatillas de Paseo',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 2200,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw5433b2ee/zoom/BS8589_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 103,
    name: 'Zapatillas de Gimnasia',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1450,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwddcdbdf4/zoom/BS8459_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 104,
    name: 'Zapatillas de Running Mountain',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1200,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwd8d93a39/zoom/BS5553_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 105,
    name: 'Zapatillas de Trecking',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1200,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw9e66d83c/zoom/BS8451_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 106,
    name: 'Zapatillas de caminata lunar',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1700,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwd37dbc7f/zoom/BS6978_01.jpg?sw=230&sfrm=jpg',
  },
  {
    id: 107,
    name: 'Zapatillas de entrecasa',
    description:
      'Zapatillas para correr por la vida como si fueses una persona deportista cuando en realidad no lo sos y solo lo haces por obligación',
    price: 1200,
    rating: 4,
    stock: 200,
    image:
      'https://www.reebok.com.ar/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwadc22a6c/zoom/CM8787_01.jpg?sw=230&sfrm=jpg',
  },
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
