"use client";
import { getProducts } from "@/API/products";
import CardProduct from "@/components/CardProduct";
import { Iproducts } from "@/type";
import React, { useState } from "react";
import { useEffect } from "react";

function page() {
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFromAPI = await getProducts();
        setProducts(productsFromAPI);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-3">

      {products.map((product) => (
        <CardProduct
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        />
      ))}
      </div>
    </>
  );
}

export default page;
