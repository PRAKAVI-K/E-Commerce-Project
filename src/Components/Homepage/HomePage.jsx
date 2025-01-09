import { useNavigate } from "react-router-dom";
import "../Homepage/HomePage.css";
export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="toFlex">
            <div className="leftN">
                <h1>
                    N<span>EW</span> <br></br> <span>COLLE</span>CTI<span>ON</span>
                </h1>
                <button onClick={() => navigate("/Product")} className="rightArrow">
                    EXPLORE NOW &nbsp; <span className="entity"> &gt;&gt;&gt;</span>
                </button>
            </div>
            <div className="right"></div>
        </div>
    );
};
