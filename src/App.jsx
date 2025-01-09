import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Components/Homepage/HomePage";
import { NavBar } from "./Components/NavBar/NavBar";
import { Product } from "./Components/Product/Product";
import { SingleProduct } from "./Components/Product/SingleProduct";
import { Cart } from "./Components/cart/Cart";
import { useState } from "react";
import Login from "./Components/form/Login";
import SignUp from "./Components/form/SignUp";
import Checkerro from "./Components/cart/Checkerro";
import OrderConfirmation from "./Components/cart/OrderConfirmation";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);

  //  products ,added to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  //   products, removed from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<Product addToCart={addToCart} />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct addToCart={addToCart} />} />
        <Route path="/Checkout" element={<Checkerro />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
