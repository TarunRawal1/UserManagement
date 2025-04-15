import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/Usercontext";
import { usePage } from "../context/Pagecontext";
const Listusers = () => {
  const { user, addUser, dispatch } = useUserContext();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");
  const pagedis = usePage();
  useEffect(() => {
    pagedis.dispatch({ type: "ADD_PAGE", payload: { page: 4 } });

    async function fetchData() {
      const response = await fetch("http://localhost:5000/list", {
        method: "GET",
      });
      const data = await response.json();
      console.log("User Data", data);
      addUser(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRole === "all") {
      setFilteredUsers(user);
    } else {
      const filtered = user.filter((u) => u.role === selectedRole);
      setFilteredUsers(filtered);
    }
  }, [selectedRole, user]);

  return (
    <div className="w-4/5 mx-auto min-h-screen mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded shadow-lg">
          List of Users
        </h1>
        <select
          value={selectedRole}
          onChange={(e) => {
            setSelectedRole(e.target.value);
            if (e.target.value === "user") {
              dispatch({
                type: "ROLE_USER",
                payload: {
                  roleUser: true,
                },
              });
            } else if (e.target.value === "admin") {
              dispatch({
                type: "ROLE_ADMIN",
                payload: {
                  roleUser: true,
                },
              });
            }
          }}
          className="p-2 border rounded shadow-md bg-white"
        >
          <option value="all">All</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow-lg">
        {filteredUsers.length > 0 ? (
          <ul className="space-y-4">
            {filteredUsers.map((user, index) => (
              <li
                key={index}
                className="p-4 border rounded bg-white shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">
                    Name: {user.firstName} {user.lastName}
                  </p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                  <p>Designation: {user.designation}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Listusers;
