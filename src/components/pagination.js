import React, { useState, useEffect } from 'react';

const Pagination = ({ totalCount, currentPage, onPageChange }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalCount / 20); // Assuming 20 items per page
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    setPages(pagesArray);
  }, [totalCount]);

  // Logic to calculate the visible page numbers
  const visiblePages = [];
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(currentPage + 1, pages.length); i++) {
    visiblePages.push(i);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </li>
            {visiblePages.map((page) => (
              <li
                className={`page-item ${page === currentPage ? 'active' : ''}`}
                key={page}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pages.length}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
