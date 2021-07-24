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


  const [id, setId] = useState(0);
  // const [plantId, setPlantId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  // const [dueDate, setDueDate] = useState('');



  // const [errors, setErrors] = useState([]);



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

// console.log(id)

// console.log(plant);
// console.log(todos);



  // console.log(sessionUser, 'sessionUser');

  const handleEdit = async(e) => {
    e.preventDefault();
console.log(e.target);
    // await dispatch(editPlant({}))
      setShowForm(false);
      return;
  }


  // const handleDelete = async(e) => {
  //   // e.preventDefault();
  //   await dispatch(removeNote(id))
  //   history.push();
  // }


  let todoDom = null;

  if (showForm) {
    todoDom = (
      todos.map(td => (
        <form onSubmit={handleEdit} key={td.id} className={td.id}>
          <button type="submit">Save</button>
          <label >
            Title
            <input
              type="text"
              placeholder={td.title}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>

          <label>
            Description
            <input type="text" placeholder={td.description} />
          </label>

          <label>
            Complete
            <input
              type="checkbox"
              checked={complete}
              onChange={e => setComplete(e.target.checked)}
            />
          </label>
        </form>
      ))
    )
  } else {
    todoDom = (
      todos.map(td => (
        <div key={td.id} className='todo'>
          <div className='todoTitle todoText'>{td.title}</div>
          <div className='todoDescription todoText'>{td.description}</div>
          <div className='todoComplete todoText'>{`Completed: ${td.complete}`}</div>
          <button className='todoSettings' onClick={() => setShowForm(true)}></button>
        </div>
      ))
    )
  }





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
          {todoDom}

        </div>






      </div>
    </div>
  )
}

export default Todo;
