import React from "react";
import LOGO from "../assets/OIP.jpg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="flex justify-center items-center rounded  shadow-lg p-4 mb-4">
      <header
        style={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)" }}
        className="flex justify-center items-center broder-2 rounded  bg-gray-600 text-white p-4 gap-7 w-3/5"
      >
        <Link to="/">
          <img
            src={LOGO}
            alt="logo"
            className="logo rounded"
            style={{ height: "80px" }}
          />
        </Link>
        <Link to="/">
          <h1 className="text-xl font-bold">User Management Application</h1>
        </Link>
      </header>
    </div>
  );
};
