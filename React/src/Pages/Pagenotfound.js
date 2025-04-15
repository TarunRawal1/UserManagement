import React from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/notfound.webp";
const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={LOGO}
        alt="Page Not Found"
        className="mb-6 rounded shadow-lg"
        style={{ height: "250px" }}
      />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <button
        onClick={handleGoHome}
        className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
      >
        Go Home
      </button>
    </div>
  );
};

export default PageNotFound;
