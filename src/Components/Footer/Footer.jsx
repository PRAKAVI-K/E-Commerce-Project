import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footerFlex">
        <div className="prayaga">
          <span className="shopNamef">Prayaga</span>
          <br></br>
          Customer Service<br></br> 044-345677823/044-845632334
          <h6 className="connect">CONNECT WITH US</h6>
          <div className="footerIcons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="About">
          <h6>ABOUT</h6>
          <Link to="">Contact Us</Link>
          <Link to="">About Us</Link>
          <Link to="">Careers</Link>
          <Link to="">Corporate Informations</Link>
        </div>
        <div className="Help">
          <h6>HELP</h6>
          <Link to="">Payments</Link>
          <Link to="">Shipping</Link>
          <Link to="">Cancellation & Returns</Link>
          <Link to="">FAQ</Link>
        </div>
        <div className="Address">
          {" "}
          <h6>ADDRESS</h6>
          Prayaga Private Limited,<br></br>
          Chennai- 600097,<br></br>
          Tamil Nadu, India<br></br>
        </div>
      </div>
    </div>
  );
};

export default Footer;
