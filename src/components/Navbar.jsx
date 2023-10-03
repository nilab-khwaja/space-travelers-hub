import React from 'react';
import { NavLink} from 'react-router-dom';
import Applogo from './planet.png'
function Navbar() {
  return (
    <div className="navbar">
        <div className='logo'>
        <img src={Applogo} alt='Logo' width={50} height={50}/>
      <h3>Space Travelers Hub</h3>
        </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;