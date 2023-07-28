import React from "react";

const Specification = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-md">
      <p className="font-semibold text-2xl">Specification</p>

      {[...Array(6)].map((_, i) => (
        <div className="my-4 " key={i}>
          <p className="bg-violet-300/20 p-3 font-bold rounded-md">
            Main Features
          </p>

          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex justify-start items-center p-2 border-b "
            >
              <p className="w-[300px]">Display Type</p>
              <p>LED</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Specification;
