import image from "../../assets/banner2.png";
const Banner = () => {
  return (
    <div className="bg-purple-200 pt-10">
      <div className="grid grid-cols-2 gap-10 items-center container ">
        <div>
          <div className="space-y-4">
            <h1 className="text-8xl font-semibold uppercase text-purple-400">
              Live for
              <br />
              <span className="text-purple-900">Fashion</span>
            </h1>
            <p className="text-2xl">Enjoy The best product</p>
            <button className="bg-purple-500 text-white py-3 px-3 rounded font-semibold text-lg">
              Browse Collection
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
