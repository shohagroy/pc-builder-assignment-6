import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

const Navbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
      name: "Monitor",
      link: "/",
      logo: <FiMonitor />,
    },
    {
      id: 6,
      name: "Other",
      link: "/",
      logo: <BsBuildingAdd />,
    },
  ];

  return (
    <header class="bg-white shadow-md">
      <nav className="mx-auto  max-w-7xl">
        <div
          class=" hidden lg:flex items-center justify-between pt-4"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <Link href="/" class="-m-1.5 p-1.5">
              <div className={""}>
                <Image src="/logo.jpg" alt="Logo" height={30} width={150} />
              </div>
            </Link>
          </div>

          <div class="hidden lg:flex justify-end items-center">
            <div class="relative mr-6 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
                <span class="text-gray-500 sm:text-sm">
                  <AiOutlineSearch />
                </span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search..."
              />
            </div>

            <Link
              href="/"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between pb-3 ">
          <div class="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <div
              class="relative"
              onMouseOver={() => setOpenCategory(true)}
              onMouseOut={() => setOpenCategory(false)}
            >
              <button
                type="button"
                class="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex justify-center items-center"
              >
                Categories
                <svg
                  class="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <div
                class={`${
                  openCategory ? " absolute" : "hidden"
                } -left-12 top-full z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
              >
                <div class="p-4">
                  {categories?.map((category) => {
                    const { id, name, link, logo } = category || {};
                    return (
                      <div
                        key={id}
                        class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white text-2xl">
                          {logo}
                        </div>
                        <div class="flex-auto">
                          <Link
                            href={link}
                            class="block font-semibold text-gray-900"
                          >
                            {name}
                            <span class="absolute inset-0"></span>
                          </Link>
                          <p class="mt-1 text-gray-600">
                            Get a better understanding of your traffic
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Features
            </Link>
            <Link
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Marketplace
            </Link>
            <Link
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Company
            </Link>
          </div>

          <div>
            <Link href={"/"}>
              <button className="hidden lg:block px-6 py-3 bg-red-500 rounded-md text-white font-bold">
                PC Builder
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div class="lg:hidden">
        <div
          class={`${
            openMenu && "fixed"
          } w-full overflow-y-auto bg-white -mt-3 shadow-md`}
        >
          <div class="flex items-center justify-between px-6 py-3">
            <Link href="/">
              <div className={""}>
                <Image src="/logo.jpg" alt="Logo" height={30} width={150} />
              </div>
            </Link>

            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <GrClose size={30} /> : <AiOutlineBars size={30} />}
            </button>
          </div>

          <div
            className={`${
              openMenu ? "fixed" : "hidden"
            } left-0 top-[10vh] w-full h-screen bg-white`}
          >
            <div class="mt-6">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6 flex flex-col items-center">
                  <Link
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <div class="-mx-3">
                    <button
                      type="button"
                      class="flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setOpenCategory(!openCategory)}
                    >
                      Categories
                      <svg
                        class="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <div class={`mt-2 space-y-2 ${!openCategory && "hidden"} `}>
                      {categories?.map((category) => {
                        const { id, name, link, logo } = category || {};

                        return (
                          <Link
                            key={id}
                            href={link}
                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <button className="flex justify-center items-center">
                              <span>{logo}</span>
                              <span className="px-2">{name}</span>
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <Link
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </Link>
                  <Link
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </Link>

                  <Link
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </Link>

                  <div>
                    <Link href={"/"}>
                      <button className="px-4 py-2 bg-red-500 rounded-md text-white font-bold">
                        PC Builder
                      </button>
                    </Link>
                  </div>
                </div>

                <div class="py-6 flex justify-center items-center">
                  <Link
                    href="/"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
