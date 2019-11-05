
import React, { useState, useEffect, Suspense } from 'react';

import { getProducts } from "../dataSource/products";

import


export default function ProductList(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => { console.log("[ERROR] Failed to fetch products!"); });
  });

  return (
    <div>
      {
        products.map((product, index) => {
          return (
            <div key={index}>
              <div>{product.title}</div>
              <div>{product.description}</div>
              <div>{product.count}</div>
            </div>
          );
        })
      }
    </div>
  );
}

