import { Link } from "react-router-dom";
import { IProduct } from "../../types";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { title, image, id, price, rating, status } = product;

  return (
    <div className="card w-full h-full bg-base-100 shadow-xl">
      <Link to={`/products/${id}`}>
        <figure>
          <img src={image} className="h-[250px] p-3" alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          {title.slice(0, 50)}
          <div className="badge bg-purple-500 text-white">New</div>
        </h2>
        <h2>Price: {price}</h2>
        <h2>Rating: {rating.rate}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline capitalize text-purple-400">
            {status ? "In stock" : "Out of stock"}
          </div>
        </div>
        <button className="btn text-white bg-purple-500 w-28">
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
