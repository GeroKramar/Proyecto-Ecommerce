import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <>
      <div className="relative z-20 flex items-center overflow-hidden bg-[#c0c2bd]">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-[#c0c2bd] dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex mt-8">
              <Link
                href="/products"
                className="px-4 py-2 mr-4 text-white uppercase bg-[#e6aa9f] border-2 border-transparent rounded-lg text-md hover:bg-[#e3a094]"
              >
                Buy NOW
              </Link>

            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img
              src="./CallToAction1.png"
              className="max-w-xs m-auto md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
