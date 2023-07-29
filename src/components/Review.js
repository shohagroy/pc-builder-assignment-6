import React from "react";

const Review = () => {
  const handelReviewSubmit = (e) => {
    e.preventDefault();

    console.log("call");
  };
  return (
    <div className="my-10 bg-gray-50 shadow-md rounded-md p-4">
      <div className=" ">
        <h2 className="text-center font-bold text-xl">
          Revivew of this product...
        </h2>

        <p className="text-center">No Review Found!</p>
      </div>

      <div className="my-10">
        <div>
          <form onSubmit={handelReviewSubmit}>
            <textarea
              placeholder="review this product"
              className="w-full p-2 border border-black"
              rows="5"
            ></textarea>

            <div className="text-center  my-6">
              <button className="px-6 py-2 font-semibold text-white bg-black rounded-md">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
