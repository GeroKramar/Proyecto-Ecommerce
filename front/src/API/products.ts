import { Iproducts } from "@/type";

export async function getProductsDB() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
    });
    const products: Iproducts[] = await response.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const productsDb = await getProductsDB();
    return productsDb;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductId(id: string) {
  try {
    const productsDb = await getProductsDB();
    const product = productsDb.find((product) => product.id.toString() === id);
    if(!product){
      throw new Error("Product not found")
    }
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
