import ProductCard from "@/components/ProductCard";
import React from "react";
import {
  BsFillCpuFill,
  BsFillMotherboardFill,
  BsBuildingAdd,
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { LuHardDrive } from "react-icons/lu";

const Products = () => {
  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/",
      logo: <BsFillCpuFill />,
    },
    {
      id: 2,
      name: "Motherbord",
      link: "/",
      logo: <BsFillMotherboardFill />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/",
      logo: <CgSmartphoneRam />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/",
      logo: <ImPower />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/",
      logo: <LuHardDrive />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/",
      logo: <FiMonitor />,
    },
    {
      id: 7,
      name: "Other",
      link: "/",
      logo: <BsBuildingAdd />,
    },
  ];

  return (
    <section>
      <div className="mx-auto  max-w-7xl my-14">
        <div className="text-center">
          <h2 className="text-2xl font-bold p-1">Featured Category</h2>
          <p>Get Your Desired Product from Featured Category!</p>
        </div>

        <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-7 ">
          {categories?.map((category) => {
            const { id, name, logo } = category || {};
            return (
              <button
                key={id}
                className="flex flex-col justify-center items-center p-5 rounded-md border text-2xl shadow-md hover:text-[#EE4B23] duration-300"
              >
                {logo}
                {/* <BsFillMotherboardFill className="text-3xl" /> */}
                <p className="font-bold text-sm p-1 ">{name}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 px-2">
          <div className="flex justify-between items-center bg-black p-2 text-white font-semibold rounded-md px-4">
            <p>All TV</p>
            <p>Showing 1 to 20 of 20 (1Page)</p>
          </div>
        </div>

        <div className="bg-white">
          <div className="px-2 ">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
