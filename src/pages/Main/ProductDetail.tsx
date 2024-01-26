import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductReview from "../../components/ProductDetail/ProductReview";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("../fakeDB.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const product = products.find(
    (item) => item?.id.toString() === id?.toString()
  );

  console.log(product);
  return (
    <div className="container my-20">
      <div className="grid grid-cols-2 gap-10 items-center container ">
        <div>
          <img src={product?.image} className="w-full h-[400px]" alt="" />
        </div>
        <div>
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold uppercase text-purple-400">
              {product?.title}
            </h1>
            <p className="text-2xl">{product?.description}</p>
            <h2 className="text-xl">${product?.price}</h2>
            <p className="text-xl">
              {product?.rating?.rate}({product?.rating?.count})
            </p>
            <button className="bg-purple-500 text-white py-3 px-3 rounded font-semibold text-lg">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <ProductReview id={id} />
    </div>
  );
};

export default ProductDetail;
