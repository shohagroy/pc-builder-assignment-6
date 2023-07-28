import React from "react";
import { AiOutlineSearch, AiOutlineBars } from "react-icons/ai";
import {
  BsFillCpuFill,
  BsFillMotherboardFill,
  BsBuildingAdd,
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { LuHardDrive } from "react-icons/lu";
import Link from "next/link";

const PcBuilder = () => {
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
      <div className="mx-auto  max-w-7xl my-10  shadow-sm  rounded-md border">
        <div className="flex justify-between bg-white p-3">
          <h2 className="p-3 text-xl font-semibold text-center  border-b">
            PC Builder - Build Your Own Computer - Star Tech
          </h2>

          <div>
            <button className="py-2 px-12 text-white bg-black rounded-md flex justify-center items-center flex-col">
              <span className="font-bold text-xl">7000tk</span>
              <span className="font-semibold">1 Items</span>
            </button>
          </div>
        </div>

        <div>
          <div
            className={` z-10 overflow-hidden  bg-white m-4 shadow-lg ring-1 ring-gray-900/5`}
          >
            <div className="p-4">
              {categories?.map((category) => {
                const { id, name, link, logo } = category || {};
                return (
                  <div
                    key={id}
                    className="flex justify-between items-center group my-3 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 border"
                  >
                    <div className=" relative flex items-center gap-x-6 ">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white text-xl">
                        {logo}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={link}
                          className="block font-semibold text-gray-900"
                        >
                          {name}
                          <span className="absolute inset-0"></span>
                        </Link>
                        <p className="mt-1 text-gray-600">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>

                    <div>
                      <button className="text-xl font-bold py-3 px-6 text-white bg-black rounded-md">
                        Choose
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcBuilder;
