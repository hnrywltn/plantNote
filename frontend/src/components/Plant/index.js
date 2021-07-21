import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// import {editPlant} from '../../store/plants.js';
import {getPlants} from '../../store/plants.js';


const Plant = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const plants = useSelector(state => {
    return state.plant;
  });
  const sessionUser = useSelector(state => state.session.user);


  console.log(id, 'params');
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getPlants());
  }, []);

  const plant = plants[id];
  console.log(plant, 'plant');



  console.log(sessionUser, 'sessionUser');


  let plantDom;

  if(plant) {
    plantDom = (
    <>
      <div className='plantName'>
        <h2>{plant.name}</h2>
      </div>
      <div className='plantBinomialName'>
        <p>{plant.binomialName}</p>
        {/* <p>{plant?.binomialName}</p>  <-- optionalchaining */}
      </div>
      <div className='plantImg'>
        <img src={plant.imgUrl} alt={plant.binomialName} />
      </div>
      <div className='plantSunReq'>
        <p>{plant.sunRequirements}</p>
      </div>
      <div className='plantDescription'>
        <p>{plant.description}</p>
      </div>
      <div className='plantUser'>
        <p>{plant.userId}</p>
      </div>
      <div className='plantCreatedAt'>
        <p>{plant.createdAt}</p>
      </div>
    </>
    )
} else {
  plantDom = null;
}





  return (
    <div className='plantContainer'>
      {plantDom}
    </div>
  );
}

export default Plant;
