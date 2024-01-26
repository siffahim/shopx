const Subscribe = () => {
  return (
    <div className="container my-20 px-36">
      <div className="bg-purple-500 text-white flex items-center justify-center h-52 rounded-md gap-5">
        <input
          type="text"
          className="border bg-transparent py-3 rounded-md px-2 w-2/4"
          placeholder="Email"
          name=""
          id=""
        />
        <button className="bg-purple-900 px-10 py-3 rounded-md uppercase text-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
