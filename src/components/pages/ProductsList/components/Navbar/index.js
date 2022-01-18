import "./style.css";

const Navbar = (props) => (
  <div className="navbar-container">
    <img src="/back.png" alt="back" />
    <h1>Search Product</h1>
    <div className="cart-icon">
      <img src="/bag.png" alt="cart" />
      <div className="cart-count">{props.count}</div>
    </div>
  </div>
);

export default Navbar;
