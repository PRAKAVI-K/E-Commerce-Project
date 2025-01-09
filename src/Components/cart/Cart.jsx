import Checkerro from "./Checkerro";
import PropTypes from "prop-types";
import "./Cart.css";
export const Cart = ({ cart, removeFromCart }) => (
  <div className="cartWidth">
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <div className="card C product-card">
              <img
                className="card-img-top C"
                src={item.image}
                alt={item.name}
                style={{ width: "200px", height: "150px" }}
              />
              <div className="card-body">
                <p className="card-text">{item.description}</p>
                <button
                  className="cartRemove"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
    <Checkerro />
  </div>
);
export default Cart;
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // `id` (number)
      name: PropTypes.string.isRequired, // `name` (string)
      image: PropTypes.string.isRequired, //`image` (string URL)
      description: PropTypes.string.isRequired, //`description` (string)
    })
  ).isRequired,

  removeFromCart: PropTypes.func.isRequired,
};
