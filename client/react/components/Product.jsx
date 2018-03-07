import React from 'react';
import './Product.css';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-xs-11 product-margin">
          <img
            src="http://1.bp.blogspot.com/-leY-8Np6voM/VgL6u-m2c6I/AAAAAAAAEtw/Gvb0Hg18Clw/s1600/topo.png"
            alt=""
          />
        </div>
        <div className="col-md-5 col-xs-11 product-margin">
          <h4>Rate: 5 estrellas</h4>
          <h3>Topos, runs at a very slow speed but is expert in day gardens</h3>
          <p> Pirce and free tax : 1000$</p>
          <p>in Stock </p>
        </div>
      </div>
      <div className="card text-center product-foodText">
        <div className="card-header">Topo delux</div>
        <div className="card-block">
          <p className="card-text">
            this Topo comes in different colors, and sizes, is resistant to
            water and sun and does not consume much food
          </p>
        </div>
      </div>
    </div>
  );
};
