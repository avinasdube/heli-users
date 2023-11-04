import React, { useState } from 'react';
import './CreateTeam.scss';

const CreateTeam = () => {
  const [searchedUser, setSearchedUser] = useState("");

  return (
    <div className="teamContainer">
      <div className="searchBar">
        <input type='text' placeholder='Search users by names' onChange={(e) => { setSearchedUser(e.target.value) }}></input>
      </div>
      <div className="usersList">
        <div className="users">
          <div className="userpic">
            <img src={user} alt=''></img>
            div.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTeam