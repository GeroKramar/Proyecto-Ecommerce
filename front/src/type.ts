export interface Ilogin {
  email: string;
  password: string;
}
export interface IRegister {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  password2: string;
}

export interface IErrorlogin {
  email?: string;
  password?: string;
}

export interface IErrorRegister {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  password?: string;
  password2?: string;
}

export interface Iproducts {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  image: string;
  categoryId?: number;
}

export interface IOrder {
  userId: number;
  products: number[];
}

export interface IOrderData{
  id: number;
  status: string;
  date: Date;
  products: Iproducts[];
}

export interface IuserSesion {
  token: string;
  userData: {
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    id: number;
    role: string;
    order: [];
  };
}
