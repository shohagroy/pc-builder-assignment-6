import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div class=" px-6 py-12 lg:px-8 border ">
      <div className="lg:border max-w-[600px] py-12 mx-auto lg:rounded-md lg:shadow-md">
        <div class="sm:mx-auto  sm:w-full sm:max-w-sm flex flex-col justify-start items-center ">
          <Link href="/">
            <div className={""}>
              <Image src="/logo.jpg" alt="Logo" height={30} width={150} />
            </div>
          </Link>
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in with Social
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6">
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
