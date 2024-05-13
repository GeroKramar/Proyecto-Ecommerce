import { IOrder, IOrderData, Iproducts } from "@/type";
import axios from "axios";


export async function setOrderDB(product:number[], token:string) {
  try {
    const res = await fetch("http://localhost:3000/orders",{ method: "POST",
    headers: {
      "Content-type" : "application/json",
      Authorization : token,
    },
    body: JSON.stringify({
      products: product
      }),
  });
    return res
    
  } catch (error: any) {
    throw new Error(error);
  }
}


export async function getOrderDB(token:string) {
  try {
    const response = await fetch("http://localhost:3000/users/orders", {
      method: "GET",
      headers: {
        "Content-type" : "application/json",
        Authorization : token,
      }
    }
  );
    const order:IOrderData[] = await response.json();
    return order;
  } catch (error: any) {
    throw new Error(error);
  }
}




