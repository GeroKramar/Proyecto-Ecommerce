"use client";
import {setOrderDB } from "@/API/orders";
import Skeleton from "@/components/skeleton";
import { Iproducts, IuserSesion } from "@/type";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [userSession, setUserSession] = useState<IuserSesion>();
  const [cart, setCart] = useState<Iproducts[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
      if (!userToken) {
        alert("You need to be logged in to access the cart.");
        redirect("/login");
      }
    }

    if (typeof window !== "undefined" && window.localStorage) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (cart) {
        let totalcart = 0;
        cart?.map((product:Iproducts) => {
          totalcart = totalcart + product.price

        });
        setTotal(totalcart)
      }
      setCart(cart);
    }
  }, []);

const handleItem = (id:number)=>{
  
  const updatedCards = cart.filter(card => card.id !== id);
  setCart(updatedCards);
  localStorage.setItem('cart', JSON.stringify(updatedCards));
}

const handleClick = async()=>{
try {
 const orderProduct = new Set(cart.map((product) => product.id))
 await setOrderDB(Array.from(orderProduct), userSession?.token!)
} catch (error: any) {
  throw new Error(error);
}
localStorage.setItem("cart", "[]")
setTotal(0)
setCart([])
alert("The purchase was successful!")
}

  return (
    <>
      {!userSession ? (
        <Skeleton />
      ) : cart.length==0 ? (
        <h2 className="mb-20 mt-20 text-center text-2xl font-bold">There are no items in the cart.</h2>
      ) : (
        <div className="bg-gray-100 pt-2 mb-4">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cart.map((item:Iproducts) => {
                return (
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img src={item.image} className=" w-24 h-24" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h2>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">${item.price}</p>
                          <button onClick={() => handleItem(item.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${total}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">${total + 4.99} USD</p>
                  <p className="text-sm text-gray-700">including IVA</p>
                </div>
              </div>
              <button 
              onClick={handleClick}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
