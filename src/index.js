import React from "react";
import ReactDom from "react-dom";

/** Page Components */
import ProductsList from "./components/pages/ProductsList";
import ProductDetails from "./components/pages/ProductDetails";
import CartPage from "./components/pages/Cart";
import Heading from "./components/Heading";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Heading title="Home Page" />} />
      <Route path="/products-list" element={<ProductsList />} />
      <Route path="/product-details" element={<ProductDetails />}>
        <Route path=":productId" element={<ProductDetails />} />
      </Route>
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-learn")
);

/**
 *
 * http://localhost:3000/products --- listing page
 * http://localhost:3000/product/product_id --- details
 * http://localhost:3000/cart -- cart page
 */
