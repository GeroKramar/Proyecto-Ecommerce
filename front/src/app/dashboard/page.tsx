"use client";
import { getOrderDB } from "@/API/orders";
import { IOrderData, Iproducts, IuserSesion } from "@/type";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const [userData, setUserData] = useState<IuserSesion>()
  const [ordersData, setOrdersData] = useState<IOrderData[]>()
  useEffect(()=>{
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession")
      setUserData(JSON.parse(userToken!))
      if(!userToken){
        alert("You need to be logged in to access the Dashboard.")
        redirect("/login")
      }

    }
  },[])
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await getOrderDB(userData?.token!)
      setOrdersData(response)
    }
    userData && fetchData()
  },[userData])
console.log(userData)
console.log(ordersData)
  // /users/orders
  return (
    <>
      <div className="bg-white p-3 ml-6 lg:ml-12 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{userData?.userData.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">{userData?.userData.phone}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">{userData?.userData.address}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Permanant Address</div>
              <div className="px-4 py-2">{userData?.userData.address}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">
                  {userData?.userData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
        {ordersData?.map((order) => {
        let total = 0
        const date = new Date(order.date);
        const formattedDate = date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        return (
<>
          <section key={order.id} className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                  <div
                      className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                      <div className="data">
                          <p className="font-semibold text-base leading-7 text-black">Order Id: <span className="text-indigo-600 font-medium">#999-232-{order.id}</span></p>
                          <p className="font-semibold text-base leading-7 text-black mt-4">Order Payment : <span className="text-gray-400 font-medium"> {formattedDate} </span></p>
                      </div>
                      <Link href={"https://www.correoargentino.com.ar/servicios/paqueteria"}>
                        <button
                          className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Track
                          Your Order</button>
                      </Link>                     
                  </div>
                  {order.products.map((prod:Iproducts) => { 
                    total = total + prod.price
                  
                  return( 
                 <div key={prod.id}>
                    <div  key={prod.id} className="w-full px-3 min-[400px]:px-6">
                    <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                        <div className="img-box max-lg:w-full">
                            <img src={prod.image} alt="Premium Watch image" 
                                className="aspect-square w-full lg:max-w-[140px]"/>
                        </div>
                        <div className="flex flex-row items-center w-full ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div className="flex items-center">
                                    <div className="">
                                        <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                            {prod.name}</h2>

                                    </div>

                                </div>
                                <div className="grid grid-cols-5">
                                    <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                        <div className="flex gap-3 lg:block">
                                            <p className="font-medium text-sm leading-7 text-black">price</p>
                                            <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">${prod.price}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                        <div className="flex gap-3 lg:block">
                                            <p className="font-medium text-sm leading-7 text-black">Status
                                            </p>
                                            <p
                                                className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                {order.status}</p>
                                        </div>

                                    </div>
                                    <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                        <div className="flex gap-3 lg:block">
                                            <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                Expected Delivery Time</p>
                                            <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                            {formattedDate}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
              )})}
                    <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                      <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                          <button
                              className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                              <svg className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                  fill="none">
                                  <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" stroke-width="1.6"
                                      stroke-linecap="round" />
                              </svg>
                              Cancel Order
                          </button>
                          <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Paid using Credit Card <span className="text-gray-500">ending with 8822</span></p>
                      </div>
                      <p className="font-semibold text-lg text-black py-6">Total Price: <span className="text-indigo-600"> ${total + 4.99}</span></p>
                  </div>
  
              </div>
          </div>
      </section>

          </>
        );
      })}
\
    </>
  );
}

export default page;
