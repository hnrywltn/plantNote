import { useState } from 'react';

import { useDispatch } from 'react-redux';





const Todo = ({todo, UIandMethods}) => {

  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(UIandMethods.showForm);


  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [complete, setComplete] = useState(todo.complete);







  const handleEdit = async(e) => {
    e.preventDefault();
    dispatch(UIandMethods.editTodo({title, description, complete, id: todo.id}));
    setShowForm(false);
    return;
  }



  let todoDom = null;

  if (showForm) {
    todoDom = (
        <form onSubmit={handleEdit} key={todo.id} className={todo.id}>
          <button type="submit">Save</button>
          <label >
            Title
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>

          <label>
            Description
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
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
    )
  } else {
    todoDom = (
      <div key={todo.id} className='todo'>
          <div className='todoTitle todoText'>{todo.title}</div>
          <div className='todoDescription todoText'>{todo.description}</div>
          <div className='todoComplete todoText'>{`Completed: ${todo.complete}`}</div>
          <button className='todoSettings' onClick={() => setShowForm(true)}></button>
        </div>
    )
  }





  return todoDom;
}

export default Todo;
