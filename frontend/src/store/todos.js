import { csrfFetch } from './csrf';
const LOAD = 'todos/';
const ADD_ONE = 'todos/ADD_ONE';
const EDIT = 'todos/EDIT';
const REMOVE = 'todos/REMOVE';




const load = todos => ({
  type: LOAD,
  todos,
});

const add = todo => ({
  type: ADD_ONE,
  todo,
});

const edit = todo => ({
  type: EDIT,
  todo,
});

const remove = id => ({
  type: REMOVE,
  id,
});


export const getTodos = () => async (dispatch) => {
  const res = await fetch('/api/todos');
  const todos = await res.json();
  // console.log(todos);
  dispatch(load(todos));
}


export const addTodo = payload => async (dispatch) => {
  const res = await csrfFetch(`/api/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const todo = await res.json();
    dispatch(add(todo));
    return todo;
  }
}


export const editTodo = payload => async dispatch => {
  // console.log('PAYLOAD!!!!', payload);
  const res = await csrfFetch(`/api/todos/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const todo = await res.json();
    dispatch(edit(todo));
    return todo;
  }
}


export const removeTodo = (id) => async dispatch => {
  const res = await csrfFetch(`/api/todos/${ id }`, {
      method: 'DELETE',
  })
// console.log('YAAAAAYYYYY thunks');
  if(res.ok) {
      await res.json();
      dispatch(remove(id));
    }
    return 'deleted';
}






const todoReducer = (state = [], action) => {
  // let newState;
  switch (action.type) {
    case LOAD:
      const newTodos = {};
      action.todos.forEach(todo => {
        newTodos[todo.id] = todo;
      })
      return {
        ...state,
        ...newTodos
      };

    case ADD_ONE:
        const newState = {
          ...state,
          [action.todo.id]: action.todo,
        };
        return newState;
    case EDIT: {
        return {
            ...state,
            [action.todo.id]: {
                ...state[action.todo.id],
                ...action.todo
            }
        }
    }
    case REMOVE: {
      const newState = {...state};
      // console.log('REDUCER ACTION: ', action)
      delete newState[action.id];
      return newState;
  }



    default:
      return state;
  }
};

export default todoReducer;
