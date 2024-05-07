"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuButton, SetMenuButton] = useState(true);

  const handleClick = () => {
    SetMenuButton(!menuButton);
  };

  return (
    <>
    
    <nav className="bg-gray-200 pl-5 pr-5 p-2">
      <div className=" max-w-6x1 mx-auto">
        <div className=" flex justify-between">
          <div className=" space-x-4">
            <a
              href=""
              className="flex space-x-2 items-center py-2 px-2 text-gray-700"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
              </svg>
              <span className="hidden md:flex font-bold">NexTech</span>
            </a>
          </div>
          <div className="flex items-center py-2 px-2 ">
            <section className=" flex border-2 border-gray-300 bg-white rounded-md pr-2">
              <input
                className="rounded-md pl-3 bg-white"
                type="text"
                placeholder="search.."
                />
              <button className=" items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 17"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-4 h-4 pl-2 bg-white"
                  >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
              </button>
            </section>
          </div>
          <div className=" hidden md:flex items-center space-x-2">
            <a href="" className="py-2 px-2 hover:text-gray-900 text-gray-600">
              Login
            </a>
            <a
              href=""
              className="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Sing up
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={menuButton ? "hidden" : " items-center justify-center"}>
        <a
          href=""
          className="block py-2 px-2 hover:text-gray-900 text-gray-600"
          >
          Login
        </a>
        <a
          href=""
          className="block py-2 px-2 hover:text-gray-900 text-gray-600"
          >
          Singup
        </a>
      </div>
    </nav>
    <div className="text-sm font-medium text-center bg-gray-100 text-gray-500 border-b border-gray-200 ">
    <ul className="flex justify-evenly -mb-px">
        <li className="mr-2">
            <a href="#" className="inline-block p-4 text-gray-700 border-b-2 border-gray-700 rounded-t-lg " aria-current="page">
                Home
            </a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                Home
            </a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                Results
            </a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                Live
            </a>
        </li>
    </ul>
</div>

  </>
  );
};

export default Navbar;
