import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const paginStyle = {
    border:         '1px solid #333',
    width:          '20px',
    display:        'flex',
    justifyContent: 'center',
    padding:        '5px',
    borderRadius:   '5px',
    cursor:         'pointer',
    margin:         '0 auto'
  };




  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <p style={paginStyle} onClick={() => paginate(number)}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;