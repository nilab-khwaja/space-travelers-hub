import React, { useEffect } from 'react'
import {useDispatch,  useSelector} from 'react-redux'
import { fetchRockets } from '../redux/rocketSlice'
const Rockets = () => {
   const dispatch = useDispatch()
   const rockets = useSelector((state) => state.rockets.rockets)
   const status = useSelector((state) => state.rockets.status)
   const error = useSelector((state) =>state.rockets.error)



    useEffect(()=>{
      dispatch(fetchRockets())
    }, [dispatch])

    if(status === 'loading'){
      return <div>Loading</div>
    }

    if(status === 'faild'){
      return <div>{error}</div>
    }

  return (
    <div>
      <h2>Rockets list</h2>
      <ul className="list">
        {rockets.map((rocket) => (
              <li key={rocket.id}>
             <h3>{rocket.rocket_name}</h3>
             <p>Type:{rocket.rocket_type}</p>
             <img src={rocket.flickr_images[0]} alt={rocket.name} width={100} height={100} />
           </li>
        ))}
      </ul>
    </div>
  )
}

export default Rockets