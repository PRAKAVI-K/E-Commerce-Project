 
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";
// import "./Product.css";

// export const Product = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search input

//   useEffect(() => {
//     console.log("Fetching products...");
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log("Response received:", res);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Products data:", data);
//         setProducts(data);
//         setIsLoading(false); // Stop showing spinner after data loads
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setIsLoading(false); // Stop spinner even if there's an error
//       });
//   }, []);

//   // Filter products by search query
//   const filteredProducts = products.filter((product) =>
//     product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Search Bar */}
//       {/* <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by category..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div> */}
//       <div className="search-container">
//         <i className="nav fa fa-search search-icon"></i>
//         <input type="search" placeholder="Search by category..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}   className="search-bar" /></div>
//       {/* Show Spinner while loading */}
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <div className="row product-row">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div key={product.id}>
//                 <div className="card product-card">
//                   <img
//                     className="card-img-top"
//                     src={product.image}
//                     alt={product.title}
//                     loading="lazy"
//                     onClick={() => navigate(`/SingleProduct/${product.id}`)}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text">
//                       <strong>Price:</strong> ${product.price}
//                     </p>
//                     <p>
//                       <strong>Category:</strong> {product.category}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No products found for this category.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";
// import "./Product.css";

// export const Product = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [sortOrder, setSortOrder] = useState("none"); // State to manage sorting

//   useEffect(() => {
//     console.log("Fetching products...");
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log("Response received:", res);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Products data:", data);
//         setProducts(data);
//         setIsLoading(false); // Stop showing spinner after data loads
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setIsLoading(false); // Stop spinner even if there's an error
//       });
//   }, []);

//   // Sort products based on the selected sort order
//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortOrder === "lowToHigh") {
//       return a.price - b.price;
//     } else if (sortOrder === "highToLow") {
//       return b.price - a.price;
//     }
//     return 0; // No sorting
//   });

//   return (
//     <div>
//       {/* Sort Dropdown */}
//       <div className="sort-container">
//         <label htmlFor="sort" className="sort-label">
//           Sort by Price:
//         </label>
//         <select
//           id="sort"
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="sort-dropdown"
//         >
//           <option value="none">None</option>
//           <option value="lowToHigh">Low to High</option>
//           <option value="highToLow">High to Low</option>
//         </select>
//       </div>

//       {/* Show Spinner while loading */}
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <div className="row product-row">
//           {sortedProducts.map((product) => (
//             <div key={product.id}>
//               <div className="card product-card">
//                 <img
//                   className="card-img-top"
//                   src={product.image}
//                   alt={product.title}
//                   loading="lazy"
//                   onClick={() => navigate(`/SingleProduct/${product.id}`)}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text">
//                     <strong>Price:</strong> ${product.price}
//                   </p>
//                   <p>
//                     <strong>Category:</strong> {product.category}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import "./Product.css";

export const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("none"); // State for sorting
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

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
        setIsLoading(false); // Stop showing spinner after data loads
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Stop spinner even if there's an error
      });
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filtered products based on the selected sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0; // No sorting
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="search-container">
        <i className="fa fa-search search-icon"></i>
        <input
          type="search"
          placeholder="Search by category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="sort-container">
        <label htmlFor="sort" className="sort-label">
          Sort by Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-dropdown"
        >
          <option value="none">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Show Spinner while loading */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="row product-row">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
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
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};
