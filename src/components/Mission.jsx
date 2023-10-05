import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission,cancelMission } from '../redux/Missions/missionsSlice';

const Mission = ({
  mission_id, mission_name, description, mission_join,
}) => {
  const dispatch = useDispatch();
  return (
    <tr key={mission_id}>
      <td className="mission-name"><h3>{mission_name}</h3></td>
      <td><p className="description">{description}</p></td>
      <td>
        <div>
          {mission_join ? <p className="active-member"> Active member</p> : <p className="not-member">NOT a member</p>}
        </div>
      </td>
      <td className="mission-btn">
        {mission_join
          ? <button type="button" className="leave-mission" onClick={() => dispatch(cancelMission(mission_id))}>Leave Mission</button>
          : <button type="button" className="join-mission" onClick={() => dispatch(joinMission(mission_id))}>Join Mission</button>}
      </td>
    </tr>
  );
};
Mission.propTypes = {
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mission_join: PropTypes.bool.isRequired,
};
export default Mission;
