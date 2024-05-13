"use client"
import { validateRegister } from "@/helppers";
import { IErrorRegister, IRegister } from "@/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Registerpage() {
  const router = useRouter()

  const [userData, SetUserData] = useState<IRegister>({
    name:"",
    email: "",
    address: "",
    phone:"",
    password: "",
    password2: "",
  });
  const [error, SetError] = useState<IErrorRegister>({
    name:"",
    email: "",
    address: "",
    phone:"",
    password: "",
    password2: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const errors = validateRegister(userData);
    SetError(errors);
  }, [userData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          address: userData.address,
          phone: userData.phone,
          password: userData.password,
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }  
      alert("register success");
      router.push('/login');
    } catch (error:any) {
      console.error('Registration failed:', error);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <>
      <div className="pt-4 pb-4 m-0 md:p-8 bg-gray-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Register Now!
            </h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Username
              </label>
              <input
                className={error.name ? ("w-full text-red-700 border-red-600 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"):("w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none")}
                id="name"
                name="name"
                value={userData.name}
                type="text"
                onChange={handleChange}
                required
                placeholder="username"
              />
              {error.name && (<p className="text-sm text-red-500 lg:mt-0">{error.name}</p>)}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Email
              </label>
              <input
                className={error.email? ("w-full text-red-700 border-red-600 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"):("w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none")}
                id="email-register"
                name="email"
                value={userData.email}
                required
                onChange={handleChange}
                placeholder="example@email.com"
                type="text"
              />
              {error.email && (<p className="text-sm text-red-500 lg:mt-0">{error.email}</p>)}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Address
              </label>
              <input
                className={error.address? ("w-full text-red-700 border-red-600 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"):("w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none")}
                id="address"
                name="address"
                value={userData.address}
                type="text"
                onChange={handleChange}
                required
                placeholder="address"
                />
                {error.address && (<p className="text-sm text-red-500 lg:mt-0">{error.address}</p>)}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Phone
              </label>
              <input
                className={error.phone? ("w-full text-red-700 border-red-600 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"):("w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none")}
                id="phone"
                name="phone"
                value={userData.phone}
                type="text"
                onChange={handleChange}
                required
                placeholder="011 12312-1213"
                />
                {error.phone && (<p className="text-sm text-red-500 lg:mt-0">{error.phone}</p>)}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Password
              </label>
              <input
                className={error.password? ("w-full text-red-700 border-red-600 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"):("w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none")}
                id="password"
                name="password"
                value={userData.password}
                type="password"
                onChange={handleChange}
                required
                placeholder="password"
                />
                {error.password && (<p className="text-sm text-red-500 lg:mt-0">{error.password}</p>)}
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Confirm password
              </label>
              <input
                className={error.password2 ? ("w-full text-red-700 border-red-600 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"):("w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none")}
                id="password2"
                name="password2"
                value={userData.password2}
                type="password"
                onChange={handleChange}
                required
                placeholder="confirm password"
              />
              {error.password2 && (<p className="text-sm text-red-500 lg:mt-0">{error.password2}</p>)}
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Register
            </button>
            <span className="flex mt-4 justify-center text-center"> OR </span>
            <Link href={'/login'}>
            <button
              
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
              >
              Login
            </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registerpage;
