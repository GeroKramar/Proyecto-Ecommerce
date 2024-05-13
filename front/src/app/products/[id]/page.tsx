"use client";

import { getProductId } from "@/API/products";
import {Iproducts, IuserSesion } from "@/type";
import {useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const [product, SetProduct] = useState<Iproducts>();
  const [userSession, setUserSession] = useState<IuserSesion>();
  const router = useRouter();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getProductId(params.id);
        SetProduct(response);
      
      } catch (error:any) {
        throw new Error(error)
      }
    };
    fetchdata()
    const userToken = localStorage.getItem("userSession");
    if (typeof window !== "undefined") {
      if (userToken) {
        setUserSession(JSON.parse(userToken));
      }
    }
    if (userToken !== null) {
      setUserSession(JSON.parse(userToken));
    }
  }, []);


console.log(userSession, product)
  const handleAddToCart = ()=>{
    if(!userSession){
      alert("You must be logged in to be able to purchase.")
    }
    else{
      const cart = JSON.parse(localStorage.getItem("cart")||"[]")
      cart.push(product)
      localStorage.setItem("cart",JSON.stringify(cart))
      alert("The item was added to the cart.")
      router.push("/cart")
    }

  }


  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 bg-gray-100"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">
                    Stock: {product?.stock}{" "}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"></span>
              </div>
              <p className="leading-relaxed">{product?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <button 
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
