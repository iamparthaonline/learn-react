import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import ProductListing from "./components/ProductListing";

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      loading: true,
      productsAddedToCart: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    this.setState({
      loading: false,
      productsList: data,
    });
  }

  render() {
    const { productsList, loading, productsAddedToCart } = this.state;
    return (
      <div>
        <Navbar count={productsAddedToCart.length} />
        <SearchFilter />
        {loading && <p> Products are loading.. Please Wait..</p>}
        {!loading && <ProductListing list={productsList} />}
      </div>
    );
  }
}

export default ProductsList;
