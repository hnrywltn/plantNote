import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getTodos, addTodo, editTodo, removeTodo} from '../../store/todos.js';
import Todo from './Todo.js';


import {getPlants} from '../../store/plants.js';




const Todos = () => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);




  const UIandMethods = {
    addTodo,
    editTodo,
    removeTodo,
    showForm: showForm
  };



  useEffect(() => {
    dispatch(getPlants());
    dispatch(getTodos());
  }, [dispatch]);



  const sessionUser = useSelector(state => state.session.user);

  const todos = useSelector(state => {
    return Object.values(state.todo).filter(td => td.userId === sessionUser?.id)
    .reverse();
  });

  const plants = useSelector(state => {
    return Object.values(state.plant).filter(plant => plant.userId === sessionUser?.id)
  });












  return (
    <div className='profileTodosContainer'>

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
          <button className='addTodoBttn'>+</button>

        <div className='todoScroll'>
          {todos.map((td) => {
            return (
              <Todo
                todo={td}
                UIandMethods={UIandMethods}
              />
            )
          })}

        </div>
      </div>






    </div>
  )
}

export default Todos;
