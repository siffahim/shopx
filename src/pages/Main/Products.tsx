import { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeDB.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-12 container relative">
      <div className="col-span-3 border mr-10 sticky self-start top-10 rounded-md  h-[calc(100vh-80px)] p-8">
        <h2>Product Filter</h2>
        <label className="cursor-pointer label">
          <span className="label-text text-lg font-bold text-purple-500">
            In Stock
          </span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>

        <div>
          <h2 className="text-lg font-semibold mt-6">Price Range</h2>
          <input
            type="range"
            min="0"
            max="100"
            value="100"
            className="range bg-purple-500 mt-2"
            step="25"
          />
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 my-10 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
