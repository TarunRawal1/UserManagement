import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { usePage } from "../context/Pagecontext";

const Delete = () => {
  const { dispatch } = usePage();
  useEffect(() => {
    dispatch({ type: "ADD_PAGE", payload: { page: 6 } });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormData({
        name: e.target.name.value,
        email: e.target.email.value,
      });
      const response = await fetch("http://localhost:5000/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("data", data);
      if (data.message === "User Deleted Successfully") {
        toast.success("User Deleted Successfully");
        e.target.reset(); // Reset the form fields
      } else {
        toast.error("User Deletion Failed");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred while deleting the user.");
    }
  };

  return (
    <div className="w-2/3 mx-auto mt-10 p-6 bg-gray-100 rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Delete User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
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
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
          Delete User
        </button>
      </form>
    </div>
  );
};

export default Delete;
