import PropTypes from "prop-types";
import icon from "../NavBar/2img.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ cart }) => {
  const Navigate = useNavigate();
  function Navigation() {
    Navigate("/Login");
    // const [isActive, setIsActive] = useState(false);

  }
  return (
    <div>
      <div className="NAVBAR">
        <img className="logo" src={icon} alt="logo" height={40} width={50} />
        <span className="shopName">Prayaga</span>
        <div className="NavLinks">
          {/* <div className="search-container">
            <i className="nav fa fa-search search-icon"></i>
            <input type="search" placeholder="Search..." className="search-bar" /></div> */}
          <NavLink className="nav" to="/">
            <i className="fa fa-home" style={{ fontSize: "20px" }}></i>
          </NavLink>
          <NavLink className="nav" to="/Product">
            <i className="fa fa-shopping-bag" style={{ fontSize: "20px" }}></i>
          </NavLink>
          <NavLink className="nav" to="/Cart">
            <span>
              <i
                className="fa fa-shopping-cart"
                style={{ fontSize: "23px", }}
              ></i>
              <sup>{cart.length}</sup>
            </span>
          </NavLink>
        </div>
        <button className="btn-nav" onClick={Navigation}>
          <i className="fa-solid fa-user"></i>&nbsp;LOGIN
        </button>
      </div>
    </div>
  );
};
NavBar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // id (number)
      name: PropTypes.string.isRequired, // name (string)
      price: PropTypes.number.isRequired, // price (number)
    })
  ).isRequired,
};
// };
// export default NavBar;

// import PropTypes from "prop-types";
// import icon from "../NavBar/2img.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react"; // Import useState hook
// import "./NavBar.css";

// export const NavBar = ({ cart }) => {
//   const [isActive, setIsActive] = useState(false); // Manage the toggling of the nav links
//   const Navigate = useNavigate();

//   const handleClick = () => {
//     setIsActive(!isActive); // Toggle the navigation menu
//   };

//   const handleLogin = () => {
//     Navigate("/Login");
//   };

//   return (
//     <div>
//       <div className="NAVBAR">
//         <img className="logo" src={icon} alt="logo" height={40} width={50} />
//         <span className="shopName">Prayaga</span>
//         <div className={`NavLinks ${isActive ? 'active' : ''}`}> {/* Apply active class when isActive is true */}
//           <NavLink className="nav" to="/">
//             <i className="fa fa-home" style={{ fontSize: "20px" }}></i>
//           </NavLink>
//           <NavLink className="nav" to="/Product">
//             <i className="fa fa-shopping-bag" style={{ fontSize: "20px" }}></i>
//           </NavLink>
//           <NavLink className="nav" to="/Cart">
//             <span>
//               <i className="fa fa-shopping-cart" style={{ fontSize: "23px" }}></i>
//               <sup>{cart.length}</sup>
//             </span>
//           </NavLink>
//         </div>
//         {/* Hamburger Icon */}
//         <div className="hamburger" onClick={handleClick}>
//           <i className="fa fa-bars" style={{ fontSize: "30px" }}></i>
//         </div>
//         <button className="btn-nav" onClick={handleLogin}>
//           <i className="fa-solid fa-user"></i>&nbsp;LOGIN
//         </button>
//       </div>
//     </div>
//   );
// };

// NavBar.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired, // id (number)
//       name: PropTypes.string.isRequired, // name (string)
//       price: PropTypes.number.isRequired, // price (number)
//     })
//   ).isRequired,
// };

// export default NavBar;

// import PropTypes from "prop-types";
// import icon from "../NavBar/2img.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react"; // Import useState hook
// import "./NavBar.css";

// export const NavBar = ({ cart }) => {
//   const [isActive, setIsActive] = useState(false); // Manage the toggling of the nav links
//   const Navigate = useNavigate();

//   // Toggle function to show/hide the nav links
//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   const handleLogin = () => {
//     Navigate("/Login");
//   };

//   return (
//     <div>
//       <div className="NAVBAR">
//         <img className="logo" src={icon} alt="logo" height={40} width={50} />
//         <span className="shopName">Prayaga</span>

//         {/* Navigation Links */}
//         <div className={`NavLinks ${isActive ? 'active' : ''}`}>
//           <NavLink className="nav" to="/">
//             <i className="fa fa-home" style={{ fontSize: "20px" }}></i>
//           </NavLink>
//           <NavLink className="nav" to="/Product">
//             <i className="fa fa-shopping-bag" style={{ fontSize: "20px" }}></i>
//           </NavLink>
//           <NavLink className="nav" to="/Cart">
//             <span>
//               <i className="fa fa-shopping-cart" style={{ fontSize: "23px" }}></i>
//               <sup>{cart.length}</sup>
//             </span>
//           </NavLink>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="hamburger" onClick={handleClick}>
//           <i className="fa fa-bars" style={{ fontSize: "30px" }}></i>
//         </div>

//         <button className="btn-nav" onClick={handleLogin}>
//           <i className="fa-solid fa-user"></i>&nbsp;LOGIN
//         </button>
//       </div>
//     </div>
//   );
// };

// NavBar.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired, // id (number)
//       name: PropTypes.string.isRequired, // name (string)
//       price: PropTypes.number.isRequired, // price (number)
//     })
//   ).isRequired,
// };

// export default NavBar;

