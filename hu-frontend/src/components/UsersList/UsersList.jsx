import React, { useEffect, useState } from 'react';
import './UsersList.scss';
import { fetchUsersData } from '../../apis/api';

// importing necessary images/icons

import createTeam from '../../assets/createTeam.png';
import filter from '../../assets/filter.png';

// importing necessary components

import Filters from '../Filters/Filters';
import UserCard from '../UserCard/UserCard';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { usersList } from '../../reducers/paginationReducer';

const UsersList = () => {

    const dispatch = useDispatch();

    // getting present states of 'currentPage','usersPerPage','totalUsers' from 'paginationReducer.js' through 'store.js'

    const usersGot = useSelector((state) => state.pagination.users);
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const usersPerPage = useSelector((state) => state.pagination.usersPerPage);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersGot.slice(indexOfFirstUser, indexOfLastUser);


    const [searchedUser, setSearchedUser] = useState(""); // state to manage search input

    // useEffect function to call getUserData() every time window loads

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchUsersData();
                dispatch(usersList(data));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData();
    }, [dispatch])

    // FUNCTION FOR SETTING DROPDOWN

    const [dropdown, setDropdown] = useState(false);

    const dropdownToggle = () => {
        dropdown === false ? setDropdown(true) : setDropdown(false);
    }

    return (
        <div className="userslistContainer">
            <div className="actionBar">
                <div className="searchBar">
                    <span>Heli Users</span>
                    <input type='text' placeholder='Search users by names' onChange={(e) => { setSearchedUser(e.target.value) }}></input>
                    <div className="filterBar">
                        <div className={`filtersIcon ${dropdown === true ? 'active' : 'inactive'}`} onClick={dropdownToggle}>
                            <img src={filter} alt=''></img>
                        </div>

                        {/* rendering filter options card using Filters component */}

                        <div className={`filterList ${dropdown === true ? 'active' : 'inactive'}`}>
                            <Filters />
                        </div>
                    </div>

                </div>
                <div className="createTeamLogo">
                    <img src={createTeam} alt=''></img>
                </div>
            </div>

            {/* rendering users list using UserCard component */}

            <div className="usersList">
                <UserCard users={currentUsers} searchedUser={searchedUser} />
            </div>

            {/* rendering pagination buttons using Pagination component */}

            <div className="paginationContainer">
                <Pagination />
            </div>
        </div>
    )
}

export default UsersList;