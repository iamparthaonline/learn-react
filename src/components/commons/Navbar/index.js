import { Link } from "react-router-dom";
import "./style.css";

const Navbar = (props) => (
  <div className="navbar-container">
    <img
      src="/back.png"
      alt="back"
      onClick={() => {
        if (typeof window !== "undefined") window.history.back();
      }}
    />
    <h1>{props.title}</h1>
    <Link to={"/cart"}>
      <div className="cart-icon">
        <img src="/bag.png" alt="cart" />
        <div className="cart-count">{props.count}</div>
      </div>
    </Link>
  </div>
);

export default Navbar;
