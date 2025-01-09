 
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const shoerror = ({ products }) => {
//     const { productId } = useParams();
//     const navigate = useNavigate();

//     const product = products.find((item) => item.id === parseInt(productId));

//     if (!product) {
//         return <p>Product not found!</p>;
//     }

//     const handleBuyNow = () => {
        
//         navigate("/checkout", { state: { product } });
//     };

//     return (
//         <div>
//             <h1>{product.name}</h1>
//             <img
//                 src={product.image}
//                 alt={product.name}
//                 style={{ width: "300px", height: "200px" }}
//             />
//             <p>{product.description}</p>
//             <p><strong>Price:</strong> ${product.price}</p>
//             <button onClick={() => navigate("/cart")}>Back to Cart</button>
//             <button onClick={handleBuyNow}>Buy Now</button>
//         </div>
//     );
// };

// export default shoerror;
