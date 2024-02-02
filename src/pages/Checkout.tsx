import { useEffect, useState } from "react";
import { IProduct } from "../types";

const Checkout = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("./fakeDB.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <section className="grid grid-cols-2 container  my-24 gap-10">
      <div className="border p-4 rounded-md">
        <form className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="City"
            className="input input-bordered w-full "
          />

          <textarea
            className="textarea textarea-bordered w-full col-span-2"
            placeholder="Address"
          ></textarea>
        </form>
        <label className="mt-5 inline-block text-lg font-bold" htmlFor="">
          Payment Method
        </label>{" "}
        <br />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Online Payment</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Cash on Delivery</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
      </div>
      <div>
        <h2>Order summary</h2>
        <div className="border bg-slate-100 p-3 rounded-md flex  flex-col h-[60vh] over">
          <div className="flex-grow overflow-auto">
            {products.slice(0, 5).map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between  bg-white mb-2 p-2 rounded"
              >
                <img src={product.image} className="w-24 h-24" alt="" />
                <div>
                  <h2 className="font-semibold">
                    {product.title.slice(0, 20)}
                  </h2>
                  <h2>Price: 200</h2>
                </div>
                <h2 className="text-2xl font-bold">1</h2>
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-5">
            <div className="flex justify-between text-lg">
              <p>Subtotal</p>
              <p>77.90$</p>
            </div>
            <div className="flex justify-between text-lg">
              <p>Delivery</p>
              <p>4.5$</p>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>81.95$</p>
            </div>
            <button className="btn w-full btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
