import { Iproducts } from "@/type";
import Link from "next/link";
import React from "react";

const TrendingProductsCard: React.FC<Iproducts> = ({image, name, price, id }) => {


  return (
    <>
      <div className="inline-flex w-64 flex-col text-center lg:w-auto">
        <div>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md ">
            <img
              src={image}
              alt="Black machined steel pen with hexagonal grip and small white logo at top."
              className=" h-72 w-auto object-cover object-center group-hover:opacity-75"
            ></img>
          </div>
          <div className="mt-6">
            <h3 className="mt-1 font-semibold text-gray-900"> 
             <span className=""></span>
                {name}
            </h3>
            <p className="mt-1 text-gray-900">${price}</p>
            <Link href={`/products/${id}`}>
            <button  className=" p-3 mt-2 bg-[#e6aa9f] rounded-md text-gray-50 hover:bg-[#f5a091]">Product Details</button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProductsCard;
