const comments = [
  "Aita Baje product",
  "200 diya o kinbo nah",
  "Order korci ki r pilam ki",
  "Kaw kinben nah",
  "Seller baje",
];

const ProductReview = ({ id }: { id: string }) => {
  return (
    <div>
      <div className="flex items-center gap-5  mt-32">
        <input
          type="text"
          className="border bg-transparent py-3 rounded-md px-2 w-3/4"
          placeholder="Write a comment"
          name=""
          id=""
        />
        <button className="bg-purple-500 text-white px-10 py-3 rounded-md  text-lg">
          Add Comment
        </button>
      </div>
      <div className="mt-8">
        {comments.map((item, index) => (
          <p className="text-lg mb-2">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
