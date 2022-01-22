import React, { Component } from "react";
import "./style.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      productCount: props.count,
    };
    this.getDetailsFromApi();
  }

  async getDetailsFromApi() {
    const response = await fetch(
      `https://fakestoreapi.com/products/${this.props.productId}`
    );
    const data = await response.json();
    this.setState({
      data,
      loading: false,
    });
  }

  addProduct() {
    const { productId } = this.props;
    let { productCount } = this.state;
    const cartData = JSON.parse(localStorage.getItem("cartData"));

    productCount += 1;
    cartData[productId] = productCount;
    localStorage.setItem("cartData", JSON.stringify(cartData));
    this.setState({
      productCount,
    });
    this.props.updateCartCount();
  }

  removeProduct() {
    const { productId } = this.props;
    let { productCount } = this.state;
    const cartData = JSON.parse(localStorage.getItem("cartData"));

    if (productCount > 0) {
      productCount -= 1;
      cartData[productId] = productCount;
      localStorage.setItem("cartData", JSON.stringify(cartData));
      this.setState({
        productCount,
      });
      this.props.updateCartCount();
    }
  }

  render() {
    const { loading, data, productCount } = this.state;
    const { title, category, image, price, id, rating, description } = data;
    return (
      <div className="details-page">
        {loading && <p>Please wait. Data is being fetched!</p>}
        {!loading && (
          <div>
            <img src={image} alt="title" />
            <div className="product-card-details">
              <div className="title-rating">
                <h2>{title}</h2>
                <div className="ratings">
                  <div className="main-rating"> Rating: {rating.rate}</div>
                  <span>{rating.count} reviews</span>
                </div>
              </div>
              <p>{description}</p>
              <div className="actions">
                <div className="price">${price}</div>
                <div className="card-count-wrapper">
                  <button onClick={() => this.addProduct()}>+</button>
                  <div className="count-text"> {productCount} </div>
                  <button onClick={() => this.removeProduct()}>-</button>
                </div>
                <button className="cart">Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Details;
