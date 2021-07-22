import { csrfFetch } from './csrf';
const LOAD = 'notes/';
const ADD_ONE = 'notes/ADD_ONE';
const EDIT = 'notes/EDIT';
const REMOVE_NOTE = 'notes/REMOVE';




const load = notes => ({
  type: LOAD,
  notes,
});

const add = note => ({
  type: ADD_ONE,
  note,
});

const edit = note => ({
  type: EDIT,
  note,
});

const remove = id => ({
  type: REMOVE_NOTE,
  id,
});


export const getNotes = () => async (dispatch) => {
  const res = await fetch('/api/notes');
  const notes = await res.json();
  // console.log(notes);
  dispatch(load(notes));
}


export const addNote = payload => async (dispatch) => {
  const res = await csrfFetch(`/api/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const note = await res.json();
    dispatch(add(note));
    return note;
  }
}


export const editPlant = payload => async dispatch => {
  // console.log('PAYLOAD!!!!', payload);
  const res = await csrfFetch(`/api/notes/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const note = await res.json();
    dispatch(edit(note));
    return note;
  }
}


export const removeNote = (id) => async dispatch => {
  const res = await csrfFetch(`/api/notes/${ id }`, {
      method: 'DELETE',
  })
// console.log('YAAAAAYYYYY thunks');
  if(res.ok) {
      await res.json();
      dispatch(remove(id));
    }
    return 'deleted';
}






const noteReducer = (state = [], action) => {
  // let newState;
  switch (action.type) {
    case LOAD:
      const newNotes = {};
      action.notes.forEach(note => {
        newNotes[note.id] = note;
      })
      return {
        ...state,
        ...newNotes
      };

    case ADD_ONE:
        const newState = {
          ...state,
          [action.note.id]: action.note,
        };
        return newState;
    case EDIT: {
        return {
            ...state,
            [action.note.id]: {
                ...state[action.note.id],
                ...action.note
            }
        }
    }
    case REMOVE_NOTE: {
      const newState = {...state};
      // console.log('REDUCER ACTION: ', action)
      delete newState[action.id];
      return newState;
  }



    default:
      return state;
  }
};

export default noteReducer;
