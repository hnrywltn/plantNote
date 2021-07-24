import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getTodos, addTodo, editTodo, removeTodo} from '../../store/todos.js';
import {getPlants} from '../../store/plants.js';




const Todo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const {id} = useParams();

  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState([]);



  useEffect(() => {
    dispatch(getPlants());
    dispatch(getTodos());
  }, []);



  const sessionUser = useSelector(state => state.session.user);

  const todos = useSelector(state => {
    return Object.values(state.todo).filter(td => td.userId === sessionUser?.id)
    .reverse();
  });

  const plants = useSelector(state => {
    return Object.values(state.plant).filter(plant => plant.userId === sessionUser?.id)
  });



// console.log(plant);
// console.log(todos);



  // console.log(sessionUser, 'sessionUser');

  // const handleSubmit = async(e) => {
  //   e.preventDefault();

  //   await dispatch(editPlant({}))
  //     setShowForm(false);
  //     return;
  // }


  // const handleDelete = async(e) => {
  //   // e.preventDefault();
  //   await dispatch(removeNote(id))
  //   history.push();
  // }








  return (
    <div className='profileTodosContainer'>
      {/* <h1>HELLO FROM TODOS</h1> */}
      <div className='profile'>


        <div className='profilePic'>
          <img src={sessionUser.profileImg} alt='profile pic'  />
        </div>


        <div className='profileName'>
          {sessionUser.username}
        </div>


        <div className='profileBio'>
          {sessionUser.bio}
        </div>

        <div className='profilePlants'>
        {plants.map((plant, i) => {
          return (
            <Link key={i} to={`/plants/${plant.id}`}        className='profilePlant' style={ { backgroundImage: `url(${plant.imgUrl})`} }>
              {plant.name}
            </Link>
          );
        })}
        </div>


      </div>


      <div className='todosContainer'>
        {/* <div className='addTodoBttn'> */}
          <button className='addTodoBttn'>+</button>
        {/* </div> */}

        <div className='todoScroll'>
          {todos.map(td => (
            <div key={td.id} className='todo'>
              <div className='todoTitle todoText'>{td.title}</div>
              <div className='todoDescription todoText'>{td.description}</div>
              <div className='todoComplete todoText'>{`Completed: ${td.complete}`}</div>




              <button className='todoSettings' onClick={() => setShowForm(true)}></button>
            </div>
          ))}

        </div>






      </div>
    </div>
  )
}

export default Todo;
