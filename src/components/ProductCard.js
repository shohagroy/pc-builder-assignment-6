import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const {
    id,
    Brand,
    Price,
    "Product Code": productCode,
    "Regular Price": regularPrice,
    Status,
    category,
    description,
    images,
    keyFeatures,
    name,
    specification,
  } = product || {};
  return (
    <div className="relative">
      <div className="group relative border px-3 lg:h-[400px]">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 p-6 ">
          <Image
            src={images}
            alt={name}
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
        <div className="border-t py-2">
          <h3 className=" text-gray-500 hover:text-black duration-300">
            <Link href={`/products/653`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </Link>
          </h3>

          <div className="flex lg:hidden justify-between w-full items-center">
            <p className="text-xl font-bold text-[#EE4B23]">{Price}</p>

            <p className="text-yellow-400 flex justify-center items-center">
              <AiFillStar />
              <span className="pl-1 text-black"> 4.5</span>
            </p>
          </div>
        </div>
        <div className="absolute left-0 bottom-3 w-full ">
          <div className="hidden lg:flex justify-between w-full items-center px-3">
            <p className="text-xl font-bold text-[#EE4B23]">{Price}</p>
            <p className="text-yellow-400 flex justify-center items-center">
              <AiFillStar />
              <span className="pl-1 text-black"> 4.5</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
