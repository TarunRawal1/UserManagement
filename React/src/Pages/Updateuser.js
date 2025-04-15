import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { usePage } from "../context/Pagecontext";

const Updateuser = () => {
  const { dispatch } = usePage();
  useEffect(() => {
    dispatch({ type: "ADD_PAGE", payload: { page: 5 } });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        role: e.target.role.value,
        designation: e.target.designation.value,
      };
      console.log("formData", formData);
      const response = await fetch("http://localhost:5000/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response", response);
      const data = await response.json();
      if (data.message === "User Updated Successfully") {
        toast.success("User Updated Successfully");
        e.target.reset();
      } else {
        toast.error("User Update Failed! Please check the values.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  return (
    <div className="w-2/3 mx-auto mt-10 p-6 bg-gray-100 rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        Update User Details
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="Enter Role (e.g., admin/user)"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Enter Designation (e.g., Manager/Developer)"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Updateuser;
