import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";
const OrderConfirmation = () => {
    const navigate = useNavigate();
    return (
        <div className="confirmWidth">
            <div className="contain">
                <h1 className="orderh">
                    Thank You for Your Order!
                </h1>
                <p className="orderp">
                    Your order   has been placed successfully.</p>
                <p className="orderp">
                    We appreciate your business and will process your order shortly.
                </p>
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                <button
                    className="btn-Home"
                    onClick={() => navigate("/")}>
                    Back to Home
                </button>
                <button
                    className="btn-cart"
                    onClick={() => navigate("/cart")}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};
export default OrderConfirmation;
