"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "@/API/products";
import TrendingProductsCard from "./trendingProductsCard";
import { Iproducts } from "@/type";


const TendingProducts =() => {
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const productsFromAPI = await getProducts();
              setProducts(productsFromAPI.slice(0, 4));
          } catch (error) {
              throw new Error('Error fetching products');
          }
      };

      fetchProducts();
  }, []);
  return (
    <>
      <div className="bg-[#c0c2bd] mt-0">
        <div className="py-6 sm:py-10 lg:mx-auto lg:max-w-7xl mt-0 lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Trending products
            </h2>
            <Link
              href="/products"
              className="hidden text-sm font-semibold text-gray-900 hover:text-gray-700 sm:block"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8">
            <div className="-mb-6 w-full overflow-x-auto pb-6">
              <div
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
              >
                {products.map(product => (
                <TrendingProductsCard  
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}/>
                   ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex px-4 sm:hidden">
            <Link
              href="/products"
              className="text-sm font-semibold text-gray-900 hover:text-gray-500"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TendingProducts;
