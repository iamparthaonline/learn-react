import React, { Component } from "react";
import Navbar from "../../commons/Navbar";
import "./style.css";
class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      cartCount: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    let tCount = 0;
    const productIds = [];
    for (let i = 0; i < Object.keys(cartData).length; i += 1) {
      const savedProductId = Object.keys(cartData)[i];
      productIds.push(savedProductId);
      tCount += cartData[savedProductId];
    }
    this.setState({
      cartCount: tCount,
    });

    this.getData(productIds, cartData);
  }

  async getData(productIds, cartData) {
    const data = [];
    let totalPrice = 0;

    for (let i = 0; i < productIds.length; i += 1) {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productIds[i]}`
      );
      const productData = await response.json();
      productData.count = cartData[productIds[i]];
      totalPrice += productData.price * productData.count;
      data.push(productData);
    }
    console.log("data", data);
    this.setState({ data, loading: false, totalPrice });
  }

  render() {
    const { data, loading, cartCount, totalPrice } = this.state;
    return (
      <div>
        <Navbar title="Cart" count={cartCount} />
        {loading && <div>Please wait, Cart is being loaded</div>}
        {!loading && (
          <div className="cart-data">
            {data.map((product) => (
              <div className="cart-product" key={product.id}>
                <img src={product.image} />
                <div className="cart-product-title">
                  <h2>{product.title}</h2>
                  <p>{product.price}</p>
                </div>
                <div className="cart-product-count">
                  <div>{product.count}</div>
                  <button>Remove</button>
                </div>
              </div>
            ))}
            <div className="total-price">
              <span>Total Price</span> <span> {totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartPage;
