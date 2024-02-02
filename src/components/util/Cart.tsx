import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./fakeDB.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4">
          <div id="my-drawer-4">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </label>
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="p-4 w-[600px] min-h-full bg-white text-base-content ">
          <h2 className="text-lg">Cart</h2>
          <h1>Total: 0.00</h1>

          <div className="mt-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between mb-2 gap-10 border p-2 rounded"
              >
                <div>
                  <img
                    src={product.image}
                    className="w-32 h-32 inline-block"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-semibold">
                    {product.title.slice(0, 20)}
                  </h2>
                  <h2>Quantity: 2</h2>
                  <h2>Total price: 200</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <button className="btn bg-purple-600 text-white text-lg">
                    +
                  </button>
                  <button className="btn bg-purple-600 text-white text-lg">
                    -
                  </button>
                  <button className=" btn text-white text-lg bg-red-400">
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-primary w-full mt-5"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
