import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePage } from "../context/Pagecontext";

const Footer = () => {
  const { page } = usePage();
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  const [currentPage, setCurrentPage] = useState(page);
  const totalPages = 6;
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigateToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigateToPage(currentPage + 1);
    }
  };

  const navigateToPage = (page) => {
    switch (page) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/about");
        break;
      case 3:
        navigate("/search");
        break;
      case 4:
        navigate("/listusers");
        break;
      case 5:
        navigate("/update");
        break;
      case 6:
        navigate("/delete");
        break;
      default:
        navigate("/");
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
