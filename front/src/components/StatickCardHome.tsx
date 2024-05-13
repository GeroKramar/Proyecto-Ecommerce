import React from "react";

function StatickCardHome() {
  return (
    <>
      <section className=" bg-gray-200 ray-50">
        <div className="py-10  sm:py-16 block lg:py-10 relative bg-opacity-50  z-40  ">
          <div className="relative mx-auto h-full px-4 pb-2  md:pb-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-2">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div className="grid grid-cols-1 mt-6 sm:grid-cols-3 lg:mt-1">
                <a
                  className="transition-all  duration-1000 bg-white hover:bg-[#9c9994]  hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <div className=" absolute  bg-[#9c9994]/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                  <div className="py-2 px-9 relative">
                    <svg
                      className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M9 15L15 9"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5C13.9477 15.5 13.5 15.0523 13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5C15.0523 13.5 15.5 13.9477 15.5 14.5Z"
                          fill="#000000"
                        ></path>{" "}
                        <path
                          d="M10.5 9.5C10.5 10.0523 10.0523 10.5 9.5 10.5C8.94772 10.5 8.5 10.0523 8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5C10.0523 8.5 10.5 8.94772 10.5 9.5Z"
                          fill="#000000"
                        ></path>{" "}
                        <path
                          d="M14.0037 4H9.9963C6.21809 4 4.32899 4 3.15525 5.17157C2.27661 6.04858 2.0557 7.32572 2.00016 9.49444C1.99304 9.77248 2.22121 9.99467 2.49076 10.0652C3.35074 10.2901 3.98521 11.0711 3.98521 12C3.98521 12.9289 3.35074 13.7099 2.49076 13.9348C2.22121 14.0053 1.99304 14.2275 2.00016 14.5056C2.0557 16.6743 2.27661 17.9514 3.15525 18.8284M18 4.10041C19.3086 4.22774 20.1885 4.51654 20.8448 5.17157C21.7234 6.04858 21.9443 7.32572 21.9998 9.49444C22.007 9.77248 21.7788 9.99467 21.5092 10.0652C20.6493 10.2901 20.0148 11.0711 20.0148 12C20.0148 12.9289 20.6493 13.7099 21.5092 13.9348C21.7788 14.0053 22.007 14.2275 21.9998 14.5056C21.9443 16.6743 21.7234 17.9514 20.8448 18.8284C19.671 20 17.7819 20 14.0037 20H9.9963C8.82865 20 7.84143 20 7 19.9654"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                      Best Prices
                    </h3>
                    <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                    Discover unbeatable deals across a wide product range, ensuring you always get the best value.
                    </p>
                  </div>
                </a>

                <a
                  
                  className="transition-all  duration-1000 bg-white hover:bg-[#9c9994]  hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <div className=" absolute  bg-[#9c9994]/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                  <div className="py-2 px-9 relative  ">
                    <svg
                      className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M11 16V14.5C11 12.6144 11 11.6716 10.4142 11.0858C9.82843 10.5 8.88562 10.5 7 10.5H6.4C6.02856 10.5 5.84284 10.5 5.68616 10.5123C5.24387 10.5471 4.82209 10.6533 4.4323 10.8194M11 16H16M11 16H3.1C3.00714 16 2.96071 16 2.92154 15.9969C2.43116 15.9583 2.04168 15.5688 2.00308 15.0785C2 15.0393 2 14.9929 2 14.9C2 14.5286 2 14.3428 2.01233 14.1862C2.04049 13.8284 2.11535 13.484 2.23084 13.1591"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M9.5 16C9.5 17.6569 8.15685 19 6.5 19C4.84315 19 3.5 17.6569 3.5 16"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M12 5H12.5279C13.7307 5 14.3321 5 14.8154 5.2987C15.2987 5.5974 15.5677 6.13531 16.1056 7.21114L19 13"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M18.1426 11L18.8243 10.4978C19.0871 10.3041 19.2186 10.2073 19.31 10.0811C19.3722 9.99519 19.4203 9.89994 19.4526 9.7989C19.5 9.65046 19.5 9.48721 19.5 9.16072C19.5 8.54327 19.5 8.23455 19.3684 8.00405C19.2797 7.84887 19.1511 7.72028 18.996 7.63165C18.7654 7.5 18.4567 7.5 17.8393 7.5H16.5"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M18 18.8293C18.3128 18.9398 18.6494 19 19 19C20.6569 19 22 17.6569 22 16C22 14.3431 20.6569 13 19 13C17.3431 13 16 14.3431 16 16C16 16.3506 16.0602 16.6872 16.1707 17"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                      Same-Day Shipping
                    </h3>
                    <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                    Experience swift and reliable delivery with our same-day shipping service, straight to your doorstep.
                    </p>
                  </div>
                </a>
                <a
                  
                  className="transition-all  duration-1000 bg-white hover:bg-[#9c9994]  hover:shadow-xl m-2 p-4 relative z-40 group  "
                >
                  <div className=" absolute  bg-[#9c9994]/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                  <div className="py-2 px-9 relative  ">
                    <svg
                      className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          d="M12 16.0678L8.22855 19.9728C7.68843 20.5321 7.41837 20.8117 7.18967 20.9084C6.66852 21.1289 6.09042 20.9402 5.81628 20.4602C5.69597 20.2495 5.65848 19.8695 5.5835 19.1095C5.54117 18.6804 5.52 18.4658 5.45575 18.2861C5.31191 17.8838 5.00966 17.5708 4.6211 17.4219C4.44754 17.3554 4.24033 17.3335 3.82589 17.2896C3.09187 17.212 2.72486 17.1732 2.52138 17.0486C2.05772 16.7648 1.87548 16.1662 2.08843 15.6266C2.18188 15.3898 2.45194 15.1102 2.99206 14.5509L5.45575 12"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          d="M12 16.0678L15.7715 19.9728C16.3116 20.5321 16.5816 20.8117 16.8103 20.9084C17.3315 21.1289 17.9096 20.9402 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5708 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2896C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.5509L18.5442 12"
                          stroke="#000000"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          d="M5.5 6.39691C5.17745 7.20159 5 8.08007 5 9C5 12.866 8.13401 16 12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C11.0801 2 10.2016 2.17745 9.39691 2.5"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                      Top Brands
                    </h3>
                    <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                    Access top-quality brands known for their durability and superior performance, all in one place.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatickCardHome;
