import { useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./components/details";
import Navbar from "../../commons/Navbar";

const ProductDetails = () => {
  const { productId } = useParams();
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  let productCount = 0;
  console.log("cartData", cartData);

  let tempCount = 0;

  for (let i = 0; i < Object.keys(cartData).length; i += 1) {
    const savedProductId = Object.keys(cartData)[i];

    tempCount += cartData[savedProductId];
    if (productId == savedProductId) {
      productCount = cartData[savedProductId];
    }
  }
  const [cartCount, setCartCount] = useState(tempCount);

  return (
    <div>
      <Navbar count={cartCount} title="Product details" />
      <Details
        productId={productId}
        count={productCount}
        updateCartCount={() => {
          const cartData = JSON.parse(localStorage.getItem("cartData"));
          let tCount = 0;

          for (let i = 0; i < Object.keys(cartData).length; i += 1) {
            const savedProductId = Object.keys(cartData)[i];

            tCount += cartData[savedProductId];
          }
          setCartCount(tCount);
        }}
      />
    </div>
  );
};

export default ProductDetails;
