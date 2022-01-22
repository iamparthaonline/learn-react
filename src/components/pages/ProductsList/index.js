import React, { Component } from "react";
import Navbar from "../../commons/Navbar";
import SearchFilter from "./components/SearchFilter";
import ProductListing from "./components/ProductListing";

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      masterList: [],
      loading: true,
      productsAddedToCartCount: 0,
      cartData: {},
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    let { productsAddedToCartCount } = this.state;

    /**
     * Getting the cart data from localstorage and using it in the state to maintain the component
     */
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    for (let i = 0; i < Object.keys(cartData).length; i += 1) {
      const key = Object.keys(cartData)[i];

      for (let j = 0; j < data.length; j += 1) {
        if (data[j].id == key) {
          data[j].count = cartData[key];
          productsAddedToCartCount += cartData[key];
          break;
        }
      }
    }

    this.setState({
      loading: false,
      productsList: data,
      masterList: data,
      cartData,
      productsAddedToCartCount,
    });
  }

  addToCart(index) {
    const { productsList, cartData } = this.state;
    let { productsAddedToCartCount } = this.state;

    if (typeof productsList[index].count !== "undefined") {
      productsList[index].count += 1;
    } else {
      productsList[index].count = 1;
    }

    if (cartData[productsList[index].id]) {
      cartData[productsList[index].id] += 1;
    } else {
      cartData[productsList[index].id] = 1;
    }

    productsAddedToCartCount += 1;
    console.log("cartData", cartData);
    localStorage.setItem("cartData", JSON.stringify(cartData));

    this.setState({
      productsList,
      productsAddedToCartCount,
      cartData,
    });
  }

  removeFromCart(index) {
    console.log(index);
    const { productsList, cartData } = this.state;
    let { productsAddedToCartCount } = this.state;

    if (typeof productsList[index].count !== "undefined") {
      productsList[index].count -= 1;
    } else {
      productsList[index].count = 0;
    }

    if (cartData[productsList[index].id]) {
      cartData[productsList[index].id] -= 1;
      if (cartData[productsList[index].id] === 0) {
        delete cartData[productsList[index].id];
      }
    }

    productsAddedToCartCount -= 1;

    console.log("cartData", cartData);
    localStorage.setItem("cartData", JSON.stringify(cartData));

    this.setState({
      productsList,
      productsAddedToCartCount,
      cartData,
    });
  }

  handleSearch(searchTerm) {
    // It will go through all the products and only list the items that has search term
    console.log("searchTerm", searchTerm);
    const { masterList } = this.state;
    if (!searchTerm && searchTerm === "") {
      this.setState({
        productsList: masterList,
      });
    } else {
      const filteredList = [];
      for (let i = 0; i < masterList.length; i++) {
        if (masterList[i].title.indexOf(searchTerm) > -1) {
          filteredList.push(masterList[i]);
        }
      }
      this.setState({
        productsList: filteredList,
      });
    }
  }

  render() {
    const { productsList, loading, productsAddedToCartCount } = this.state;

    return (
      <div>
        <Navbar count={productsAddedToCartCount} title="Products list" />
        <SearchFilter
          handleSearch={(searchTerm) => this.handleSearch(searchTerm)}
        />
        {loading && <p> Products are loading.. Please Wait..</p>}
        {!loading && (
          <ProductListing
            list={productsList}
            addToCartHandler={(index) => this.addToCart(index)}
            removeFromCartHandler={(index) => this.removeFromCart(index)}
          />
        )}
      </div>
    );
  }
}

export default ProductsList;
