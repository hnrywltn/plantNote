import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import HomePageCSS from './HomePage.module.css';

import {getPlants} from '../../store/plants.js';


const HomePage = () => {
  // const [plants, setPlants] = useState([]);
  const dispatch = useDispatch();
  const {params} = useParams();
  const plants = useSelector(state => {
    return Object.values(state.plant);
  });

  // console.log(plants)

  useEffect(() => {
    dispatch(getPlants());
  }, []);

  if(!plants){
    return <div>Loading...</div>;
  }

  return (
    <div className={HomePageCSS.border}>
      <h1>HomePage</h1>
      <ul>
        {plants.map((plant, i) => {
          return <li key={i}>{plant.name}</li>;
        })}
      </ul>

    </div>
  );
}

export default HomePage;
