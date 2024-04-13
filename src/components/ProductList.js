import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3001/products");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("")}>All</button>
        <button onClick={() => setUrl("")}>In Stock</button>
      </div>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
