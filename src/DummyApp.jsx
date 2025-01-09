// import { Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import { HomePage } from "./Components/Homepage/HomePage";
// import { NavBar } from "./Components/NavBar/NavBar";
// import { Product } from "./Components/Product/Product";
// import { SingleProduct } from "./Components/Product/SingleProduct";
// import { Cart } from "./Components/cart/Cart";
// import { useState } from "react";
// import Login from "./Components/form/Login";
// import SignUp from "./Components/form/SignUp";
// import Checkerro from "./Components/cart/Checkerro";
// import OrderConfirmation from "./Components/cart/OrderConfirmation";
// import Footer from "./Components/Footer/Footer";

// // ProtectedRoute Component
// const ProtectedRoute = ({ isAuthenticated, children }) => {
//     return isAuthenticated ? children : <Navigate to="/signup" />;
// };

// function App() {
//     const [cart, setCart] = useState([]);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     // Function to add products to the cart
//     const addToCart = (product) => {
//         setCart((prevCart) => [...prevCart, product]);
//     };

//     // Function to remove products from the cart
//     const removeFromCart = (id) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//     };

//     // Simulate signup handling
//     const handleSignUp = () => {
//         setIsAuthenticated(true);
//     };

//     return (
//         <>
//             <NavBar cart={cart} />

//             <Routes>
//                 {/* SignUp as default route */}
//                 <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />

//                 {/* Login Route */}
//                 <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

//                 {/* Protected Routes */}
//                 <Route
//                     path="/"
//                     element={
//                         <ProtectedRoute isAuthenticated={isAuthenticated}>
//                             <HomePage />
//                         </ProtectedRoute>
//                     }
//                 />
//                 <Route
//                     path="/Product"
//                     element={
//                         <ProtectedRoute isAuthenticated={isAuthenticated}>
//                             <Product addToCart={addToCart} />
//                         </ProtectedRoute>
//                     }
//                 />
//                 <Route
//                     path="/SingleProduct/:id"
//                     element={
//                         <ProtectedRoute isAuthenticated={isAuthenticated}>
//                             <SingleProduct addToCart={addToCart} />
//                         </ProtectedRoute>
//                     }
//                 />
//                 <Route
//                     path="/Cart"
//                     element={
//                         <ProtectedRoute isAuthenticated={isAuthenticated}>
//                             <Cart cart={cart} removeFromCart={removeFromCart} />
//                         </ProtectedRoute>
//                     }
//                 />
//                 <Route
//                     path="/Checkout"
//                     element={
//                         <ProtectedRoute isAuthenticated={isAuthenticated}>
//                             <Checkerro />
//                         </ProtectedRoute>
//                     }
//                 />
//                 <Route
//                     path="/orderconfirmation"
//                     element={
//                         <ProtectedRoute isAuthenticated={isAuthenticated}>
//                             <OrderConfirmation />
//                         </ProtectedRoute>
//                     }
//                 />

//                 {/* 404 Route */}
//                 <Route path="*" element={<Navigate to="/signup" />} />
//             </Routes>
//             <Footer />
//         </>
//     );
// }

// export default App;
