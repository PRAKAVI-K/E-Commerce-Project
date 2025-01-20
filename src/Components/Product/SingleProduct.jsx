

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "./Product.css";

export const SingleProduct = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch product data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Find the product with the matching ID
  const product = products.find((p) => p.id === parseInt(id));

  // If the product is not found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Handle Add to Cart button
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
    navigate("/cart");
  };

  return (
    <div className="single card product-card">
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p className="description">{product.description}</p>
      </div>
      <div className="btn-sin-flex">
        <button className="sin btn-Cart" onClick={handleAddToCart}>
          Add to cart
        </button>
        <button
          className="sin btn-shopNow"
          onClick={() => navigate("/checkout", { state: { product } })}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

