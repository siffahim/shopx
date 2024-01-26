import { Link } from "react-router-dom";
import { IProduct } from "../../types";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { title, image, description, id, category, price } = product;

  return (
    <Link to={`/products/${id}`}>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-[250px] p-3" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title.slice(0, 50)}
            <div className="badge bg-purple-500 text-white">NEW</div>
          </h2>
          <h2 className="font-bold text-purple-500">${price}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline capitalize">{category}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
