import React from 'react';
import { NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h3>Space Travelers Hub</h3>
      <nav className="navbar">
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