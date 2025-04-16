import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePage } from "../context/Pagecontext";
const Home = () => {
  const { dispatch } = usePage();
  useEffect(() => {
    dispatch({ type: "ADD_PAGE", payload: { page: 1 } });
  }, []);
  return (
    <div className="hover:text-xl my-5">
      <Link to="/about">
        <div className="w-2/3 mx-auto hover:scale-110 transition duration-500 ease-in-out flex justify-center mt-10 p-4 shadow-lg hover:cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out rounded bg-gray-100">
          <h1 className="text-xl font-bold">Create a new User</h1>
        </div>
      </Link>
      <Link to="/search">
        <div className="w-2/3 mx-auto hover:scale-110 transition duration-500 ease-in-out flex justify-center mt-10 p-4 shadow-lg hover:cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out rounded bg-gray-100">
          <h1 className="text-xl font-bold">Search for a User</h1>
        </div>
      </Link>
      <a href="/listusers">
        <div className="w-2/3 mx-auto hover:scale-110 transition duration-500 ease-in-out flex justify-center mt-10 p-4 shadow-lg hover:cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out rounded bg-gray-100">
          <h1 className="text-xl font-bold">Get The List of Users</h1>
        </div>
      </a>
      <Link to="/update">
        <div className="w-2/3 mx-auto hover:scale-110 transition duration-500 ease-in-out flex justify-center mt-10 p-4 shadow-lg hover:cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out rounded bg-gray-100">
          <h1 className="text-xl font-bold">Update an Existing User</h1>
        </div>
      </Link>
      <Link to="/delete">
        <div className="w-2/3 mx-auto hover:scale-110 transition duration-500 ease-in-out flex justify-center mt-10 p-4 shadow-lg hover:cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out rounded bg-gray-100">
          <h1 className="text-xl font-bold">Delete a User</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
