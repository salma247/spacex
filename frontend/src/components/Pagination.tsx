import { useState } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useContextProvider } from "../hooks/useContext";

export function Pagination() {
  const { page, pages, setPage } = useContextProvider();
  const [activePage, setActivePage] = useState(page);
 
  const activeStyle = "bg-blue-500 text-white";
  const defaultStyle = "bg-white text-gray-500 hover:bg-gray-50";
  const disabledStyle = "bg-gray-200 text-gray-400 cursor-not-allowed";

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setActivePage(newPage);
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          onClick={() => handlePageChange(activePage - 1)}
          disabled={page === 1}
          className={`${page === 1 ? disabledStyle : defaultStyle} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium`}
        >
          <FaChevronLeft />
        </button>
        {[...Array(pages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${activePage === index + 1 ? activeStyle : defaultStyle} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(activePage + 1)}
          disabled={page === pages}
          className={`${page === pages ? disabledStyle : defaultStyle} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium`}
        >
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
}
