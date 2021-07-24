import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import HomePageCSS from './HomePage.module.css';

import {getPlants} from '../../store/plants.js';
import {getNotes} from '../../store/notes.js';
// import {getTodos} from '../../store/todos.js';


const HomePage = () => {
  // const [plants, setPlants] = useState([]);
  const dispatch = useDispatch();
  // const {params} = useParams();
  const plants = useSelector(state => {
    return Object.values(state.plant).reverse();
  });


  // const sessionUser = useSelector(state => {
  //   return state.session.user
  // });


  // const todos = useSelector(state => {
  //   return Object.values(state.todo).filter(td => td.userId === sessionUser.id)
  //   .reverse();
  // });

  // console.log(todos)

  useEffect(() => {
    dispatch(getPlants());
    dispatch(getNotes());
    // dispatch(getTodos());
  }, []);

  if(!plants){
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='homePlantCardContainer'>
    <div className='PLANTNOTE'>
      <h2 className='titleCard'>Plant</h2>
      <h2 className='titleCard'>Note</h2>
      </div>
      {/* <h1>HomePage</h1> */}
        {plants.map((plant, i) => {
          return (
            <Link key={i} to={`/plants/${plant.id}`}        className='plantCard' style={ { backgroundImage: `url(${plant.imgUrl})`} }>
              <div className='plantCardName'>{plant.name}</div>
              <div className='plantCardBName'>{plant.binomialName}</div>
            </Link>
          );
        })}

    </div>
    </>
  );
}

export default HomePage;
