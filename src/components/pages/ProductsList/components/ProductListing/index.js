import ProductCard from "./productCard";

const ProductListing = (props) => {
  return (
    <div className="product-listing">
      {props.list.map((product, index) => (
        <ProductCard
          key={index}
          details={product}
          handleProductAdd={() => props.addToCartHandler(index)}
          handleProductRemove={() => props.removeFromCartHandler(index)}
        />
      ))}
    </div>
  );
};
export default ProductListing;
