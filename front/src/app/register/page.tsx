import React from "react";

function page() {
  return (
    <>
      <div className="pt-4 pb-4 m-0 md:p-8 bg-gray-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Register Now!
            </h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Username
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Email
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="@email"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md">
                Confirm password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="confirm"
                id="confirm"
                placeholder="confirm password"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Register
            </button>
            <span className="flex mt-4 justify-center text-center"> OR </span>
            <button
              type="submit"
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
