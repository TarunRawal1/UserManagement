import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePage } from "../context/Pagecontext";

const Footer = () => {
  const { page } = usePage();
  useEffect(() => {
    setCurrentPage(page); // Update current page when page changes
  }, [page]);
  const [currentPage, setCurrentPage] = useState(page); // Current page state
  const totalPages = 6; // Total number of pages (you can adjust this)
  const navigate = useNavigate(); // For navigation

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigateToPage(currentPage - 1); // Navigate to the previous page
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigateToPage(currentPage + 1); // Navigate to the next page
    }
  };

  const navigateToPage = (page) => {
    switch (page) {
      case 1:
        navigate("/"); // Home page
        break;
      case 2:
        navigate("/about"); // About page
        break;
      case 3:
        navigate("/search"); // Search page
        break;
      case 4:
        navigate("/listusers"); // List Users page
        break;
      case 5:
        navigate("/update"); // Update User page
        break;
      case 6:
        navigate("/delete"); // Delete User page
        break;
      default:
        navigate("/"); // Default to home page
    }
  };

  return (
    <footer className="  w-full mt-10 p-4 bg-gray-200 text-center">
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-lg font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default Footer;
