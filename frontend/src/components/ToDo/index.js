import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getTodos, addTodo, editTodo, removeTodo} from '../../store/todos.js';


const Todo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const {id} = useParams();

  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState([]);



  useEffect(() => {
    dispatch(getTodos());
  }, []);



  const sessionUser = useSelector(state => state.session.user);

  const todos = useSelector(state => {
    return Object.values(state.todo).filter(td => td.userId === sessionUser?.id)
    .reverse();
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
    <div className='todosContainer'>
      <h1>HELLO FROM TODOS</h1>
      {todos.map(td => (
          <div key={td.id} className='todo'>
            <div className='todoTitle'>{td.title}</div>
            <div className='todoDescription'>{td.description}</div>
            <div className='todoComplete'>{`Complete: ${td.complete}`}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Todo;
