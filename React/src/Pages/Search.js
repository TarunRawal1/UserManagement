import React, { useState } from "react";
import { useEffect } from "react";
import { usePage } from "../context/Pagecontext";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const { dispatch } = usePage();
  useEffect(() => {
    dispatch({ type: "ADD_PAGE", payload: { page: 3 } });
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      console.log("searchTerm", searchTerm);
      const response = await fetch(
        `http://localhost:5000/search?name=${searchTerm}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log("Search Results:", data);
      setResults(data); // Update results with the fetched data
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="w-2/3 min-h-screen mx-auto mt-10">
      <form onSubmit={handleSearch} className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white ml-2 px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          <i class="bi bi-search"></i> {/* Font Awesome search icon */}
        </button>
      </form>

      {/* Search Results */}
      <div className="bg-gray-100 p-4 rounded shadow-lg">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((user, index) => (
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
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
