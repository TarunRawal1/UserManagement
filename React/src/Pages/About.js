import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { usePage } from "../context/Pagecontext";

const About = () => {
  const { dispatch } = usePage();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "ADD_PAGE", payload: { page: 2 } });
  }, []);
  async function handlesubmit(e) {
    e.preventDefault();
    const userData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      role: e.target.role.value,
      designation: e.target.designation.value,
    };
    console.log("userData", userData);
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (data.message === "User Created Successfully") {
      toast.success("User Created Successfully");
      e.target.reset(); // Reset the form fields
      navigate("/"); // Redirect to the home page after successful creation
    } else {
      toast.error("User Creation Failed");
    }
  }

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="w-2/3 mx-auto mt-10 p-6 shadow-lg rounded bg-gray-100"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create a New User
        </h1>
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
            required="true"
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
            required="true"
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
            required="true"
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
            required="true"
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
            required="true"
            placeholder="Enter Designation (e.g., Manager/Developer)"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="ml-36">
          <button
            type="submit"
            className="w-2/3 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
