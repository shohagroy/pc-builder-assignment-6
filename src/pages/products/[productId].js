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

          <div className="p-4 my-3 bg-gray-50 rounded-md shadow-md">
            <p className="font-semibold text-2xl">Description</p>

            {[...Array(3)].map((_, i) => (
              <div key={i} className="my-4">
                <h2 className="text-2xl font-bold">
                  ROWA 32S52 32 Inch HD Android Smart LED Television
                </h2>
                <p>
                  ROWA 32S52 32 Inch Android Smart LED Television has a 32-inch
                  HD display with a resolution of 1366×768 pixels. This
                  television delivers stunning visual clarity and detail. You
                  can enjoy a wider range of colors and brightness levels with
                  HDR10 and experience crystal-clear audio with Dolby Audio
                  technology. Dynamic Color Enhancement provides vivid and
                  lifelike hues, making colors pop and adding depth to images.
                  The ROWA 32S52 television also features HDMI 2.0, allowing you
                  to connect your favorite devices and enjoy high-quality audio
                  and video. With Chromecast Built-in, you can easily stream
                  content from your smartphone or tablet directly to the TV.
                  ROWA 32S52 32 Inch HD Android Smart TV provides access to all
                  your favorite apps and streaming services, including popular
                  services like Netflix, Amazon Prime Video, and YouTube.
                  Built-in Wi-Fi allows for seamless streaming and connectivity.
                  With multiple HDMI and USB ports, connecting your devices to
                  the television is easy.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-md shadow-md max-h-[640px]">
          <div className=" mx-3">
            <h3 className="text-center text-2xl font-semibold p-2">
              Related Product
            </h3>

            {[...Array(5)].map((_, i) => (
              <Link href={"/"} key={i}>
                <div className="py-3 border-t flex bg-white shadow-md my-1">
                  <Image
                    alt="related"
                    height={100}
                    width={100}
                    src={
                      "https://www.startech.com.bd/image/cache/catalog/television/rowa/32s52/32s52-02-74x74.webp"
                    }
                  />

                  <div className="ml-2">
                    <p>Dell E2016HV 19.5 LED Monitor</p>
                    <p>tadjf</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
