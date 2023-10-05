import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Profile.css';

const Profile = () => {
  const reservedRockets = useSelector(
    (state) => state.rockets.rockets.filter((rocket) => rocket.reserved),
  );

  return (
    <div className="profile">
      <h2>My Rockets</h2>
      <ul className="list">
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.rocket_name}</h3>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Profile;
