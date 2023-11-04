import React from 'react';
import './UserCard.scss';

const UserCard = ({users, searchedUser}) => {

    
    return (
        <div className="userCardContainer">
            {
                users
                    .filter((user) => {
                        return searchedUser.toLowerCase() === "" ? user : user.first_name.toLowerCase().includes(searchedUser.toLowerCase())
                    })
                    .map((user) => {
                        return (<div className="userCard" key={user.id}>
                            <div className="primeDetails">
                                <div className="avatar">
                                    <img src={user.avatar} alt=''></img>
                                </div>
                                <div className="namedetails">
                                    <div className="name">{user.first_name} {user.last_name}</div>
                                    <div className="gender">{user.gender}</div>
                                </div>
                            </div>
                            <div className="secondaryDetails">
                                <div className="sdetail">
                                    <label>Email : </label>
                                    <span>{user.email}</span>
                                </div>
                                <div className="sdetail">
                                    <label>Domain : </label>
                                    <span>{user.domain}</span>
                                </div>
                                <div className="sdetail">
                                    <label>Available : </label>
                                    {user.available === true ?
                                        <span style={{ color: 'green' }}>Yes</span> :
                                        <span style={{ color: 'red' }}>No</span>
                                    }
                                </div>
                            </div>
                        </div>)
                    })}
        </div>
    )
}

export default UserCard