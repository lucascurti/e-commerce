import React from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import SidebarCategories from './SidebarCategories';

export default ({ products, categories, addProductToCart, user }) => (
  <div className="row">
    <SidebarCategories categories={categories} />
    <main className="col-md-9 col-lg-10 pt-3 px-4 mx-auto justify-content-center">
      <div className="card-group align-self-center">
        {products.map(product => (
          <SingleProduct
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
            user={user}
          />
        ))}
      </div>
    </main>
  </div>
);
