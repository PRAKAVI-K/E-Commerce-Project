import { useLocation, useNavigate } from "react-router-dom";
import "./Checkerro.css";
const Checkerro = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    if (!product) {
        return <p> </p>;
    }
    const handlePlaceOrder = () => {
        alert("Order placed successfully!");
        navigate("/OrderConfirmation"); // Navigate to the order confirmation page
    };
    return (
        <div className="checkWidth">
            <h1 className="Check-tile">Product is Available</h1>
            <p className="card C product-card">
                <h2>{product.name}</h2>
                <img
                    className="card-img-top Check"
                    src={product.image}
                    alt={product.name}
                    style={{ width: "300px", height: "200px" }}
                />
                <p className="card-body">
                    <strong className="card-text">Price:</strong> ${product.price}
                </p>
                {/* <p><strong>Description:</strong> {product.description}</p> */}
                <button className="  placeOrder" onClick={handlePlaceOrder}>
                    Place order
                </button>
                <button className="backToCart" onClick={() => navigate("/Cart")}>
                    Back to cart
                </button>
            </p>
        </div>
    );
};
export default Checkerro;
