import Description from "@/components/Description";
import RelatedProduct from "@/components/RelatedProduct";
import Specification from "@/components/Specification";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductDetails = () => {
  const [displayImage, setDisplayImage] = useState("");

  return (
    <main className=" mx-3 lg:mx-auto  max-w-7xl ">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* image containere  */}
        <div className="">
          <div className=" ">
            <Image
              src={
                "https://www.startech.com.bd/image/cache/catalog/television/rowa/32s52/32s52-01-500x500.webp"
              }
              height={100}
              width={100}
              alt=""
              layout="responsive"
            />
          </div>
          <div className="flex lg:hidden w-full justify-center my-3  lg:justify-start items-center">
            {[...Array(3)].map((_, i) => (
              <button key={i} className="m-1 border rounded-md shadow-md">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src={
                    "https://www.startech.com.bd/image/cache/catalog/television/rowa/32s52/32s52-02-74x74.webp"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* details container */}
        <div>
          <div className="lg:my-14">
            <h2 className="text-2xl font-semibold">
              ROWA 32S52 32 Inch HD Android Smart LED Television
            </h2>
            <div className="flex justify-start items-center my-2 text-sm flex-wrap">
              <p className="bg-gray-100 py-1 px-3 m-1 rounded-full">
                Price: 23,500৳24,000৳
              </p>
              <p className="bg-gray-100 py-1 px-3 m-1 rounded-full">
                Price: 23,500৳24,000৳
              </p>
              <p className="bg-gray-100 py-1 px-3 m-1 rounded-full">
                Price: 23,500৳24,000৳
              </p>
              <p className="bg-gray-100 py-1 px-3 m-1 rounded-full">
                Price: 23,500৳24,000৳
              </p>
            </div>

            <h2 className="text-xl font-semibold my-3 lg:my-6">Key Features</h2>
            <div className="flex justify-start items-start my-2 text-sm flex-wrap flex-col">
              <p className=" pb-2 ">Model: 32S52</p>
              <p className=" pb-2 ">Resolution: HD (1366×768)</p>
              <p className=" pb-2 ">RAM: 1GB, ROM: 8GB</p>
              <p className=" pb-2 ">Operating System: Android 11</p>
              <p className=" pb-2 ">Chromecast Built-in</p>
            </div>

            <div className="hidden lg:flex w-full  justify-start items-center">
              {[...Array(3)].map((_, i) => (
                <button key={i} className="m-1 border rounded-md shadow-md">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src={
                      "https://www.startech.com.bd/image/cache/catalog/television/rowa/32s52/32s52-02-74x74.webp"
                    }
                  />
                </button>
              ))}
            </div>

            <div className="lg:my-10  my-5">
              <button className="py-3 px-10 rounded-md bg-black text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-3 ">
          <Specification />

          <Description />
        </div>

        <div className="bg-gray-50 rounded-md shadow-md max-h-[640px]">
          <div className=" mx-3">
            <h3 className="text-center text-2xl font-semibold p-2">
              Related Product
            </h3>

            {[...Array(5)].map((_, i) => (
              <RelatedProduct key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
