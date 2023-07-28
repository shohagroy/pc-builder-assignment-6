import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="relative">
      <div className="group relative border px-3 lg:h-[450px]">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 p-6 lg:p-0">
          <Image
            src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-200x200.webp"
            alt="Front of men&#039;s Basic Tee in black."
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
        <div className="border-t py-2">
          <h3 className=" text-gray-500 hover:text-black duration-300">
            <Link href={`/products/653`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              Acer Aspire 7 A715-42G-R2NE Ryzen 5 5500U GTX 1650 4GB Graphics
              15.6 FHD Gaming Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </Link>
          </h3>

          <div className="flex lg:hidden justify-between w-full items-center">
            <p className="text-xl font-bold text-[#EE4B23]">9909tk</p>

            <p className="text-yellow-400 flex justify-center items-center">
              <AiFillStar />
              <span className="pl-1 text-black"> 4.5</span>
            </p>
          </div>
        </div>
        <div className="absolute left-0 bottom-3 w-full ">
          <div className="hidden lg:flex justify-between w-full items-center px-3">
            <p className="text-xl font-bold text-[#EE4B23]">9909tk</p>
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
