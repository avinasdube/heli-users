import React from 'react';
import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/paginationReducer';
import prev from '../../assets/prev.png';
import next from '../../assets/next.png';

const Pagination = () => {

  const dispatch = useDispatch();

  // getting present states of 'currentPage','usersPerPage','totalUsers' from 'paginationReducer.js' through 'store.js'

  const currentPage = useSelector((state) => state.pagination.currentPage);
  const usersPerPage = useSelector((state) => state.pagination.usersPerPage);
  const totalUsers = useSelector((state) => state.pagination.users.length);
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const pages = Array.from({ length: totalPages }).map((_, index) => index + 1);

  // function to handle page change in pagination

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="paginationContainer">
      <div className="navButton">
        <button><img src={prev} alt=''></img></button>
      </div>
      <div className="middlePages">
        {pages.map((page) => (
          <button onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>{page}</button>
        ))}
      </div>
      <div className="navButton">
        <button><img src={next} alt=''></img></button>
      </div>
    </div>
  )
}

export default Pagination;