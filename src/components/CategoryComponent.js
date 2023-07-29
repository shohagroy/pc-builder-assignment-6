import Link from "next/link";
import React from "react";

const CategoryComponent = ({ category }) => {
  const { logo, name, link } = category || {};
  return (
    <div className="flex justify-between items-center group my-3 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 border">
      <div className=" relative flex items-center gap-x-6 ">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white text-xl">
          {logo}
        </div>
        <div className="flex-auto">
          <Link href={link} className="block font-semibold text-gray-900">
            {name}
            <span className="absolute inset-0"></span>
          </Link>
          <p className="mt-1 text-white bg-red-500 px-4 p1 rounded-full">
            Required
          </p>
        </div>
      </div>

      <div>
        <Link
          href={link}
          className="text-xl font-bold py-3 px-6 text-white bg-black rounded-md"
        >
          Choose
        </Link>
      </div>
    </div>
  );
};

export default CategoryComponent;
