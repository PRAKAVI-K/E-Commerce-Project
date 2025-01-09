import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
export const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error(error));
  // }, []);
  useEffect(() => {
    console.log("Fetching products...");
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Response received:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Products data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div className="row product-row">
      {products.map((product) => (
        <div key={product.id}>
          <div className="card product-card">
            <img
              className="card-img-top"
              src={product.image}
              alt={product.title}
              loading="lazy"
              onClick={() => navigate(`/SingleProduct/${product.id}`)}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
