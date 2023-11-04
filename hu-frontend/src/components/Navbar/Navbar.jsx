import React from 'react';
import './Navbar.scss';

import createTeam from '../../assets/createTeam.png';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className="left">
        <div className="logo">
          Heli-Users
        </div>
      </div>
      <div className="right">
        <div className="createTeamLogo">
          <img src={createTeam} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar