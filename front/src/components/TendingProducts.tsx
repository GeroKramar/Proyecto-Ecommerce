import React from "react";

function TendingProducts() {
  return (
    <>
      <div className="bg-[#c0c2bd] mt-0">
        <div className="py-6 sm:py-10 lg:mx-auto lg:max-w-7xl mt-0 lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Trending products
            </h2>
            <a
              href="#"
              className="hidden text-sm font-semibold text-gray-900 hover:text-gray-700 sm:block"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
              >
                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                        alt="Black machined steel pen with hexagonal grip and small white logo at top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      ></img>
                    </div>
                    <div className="mt-6">
                    <h3 className="mt-1 font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Machined Pen
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">$35</p>
                    </div>
                  </div>
                </li>

                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                        alt="Black machined steel pen with hexagonal grip and small white logo at top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      ></img>
                    </div>
                    <div className="mt-6">
                       <h3 className="mt-1 font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Machined Pen
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">$35</p>
                    </div>
                  </div>
                </li>
                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                        alt="Black machined steel pen with hexagonal grip and small white logo at top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      ></img>
                    </div>
                    <div className="mt-6">
                    <h3 className="mt-1 font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Machined Pen
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">$35</p>
                    </div>
                  </div>
                </li>
                <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                        alt="Black machined steel pen with hexagonal grip and small white logo at top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      ></img>
                    </div>
                    <div className="mt-6">
                    <h3 className="mt-1 font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0"></span>
                          Machined Pen
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">$35</p>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          <div className="mt-12 flex px-4 sm:hidden">
            <a
              href="#"
              className="text-sm font-semibold text-gray-900 hover:text-gray-500"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TendingProducts;
