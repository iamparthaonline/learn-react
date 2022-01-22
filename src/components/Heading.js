import { Link } from "react-router-dom";

const Heading = function (props) {
  return (
    <div>
      <h1>{props.title} </h1>
      <Link to="/products-list">Product Listing page </Link>
    </div>
  );
};
export default Heading;
