import { csrfFetch } from './csrf';
const LOAD = 'plants/';
const ADD_ONE = 'plants/ADD_ONE';
const EDIT = 'plants/EDIT';
const REMOVE_PLANT = 'plants/REMOVE';


const load = plants => ({
  type: LOAD,
  plants,
});

const add = plant => ({
  type: ADD_ONE,
  plant,
});

const edit = plant => ({
  type: EDIT,
  plant,
});

const remove = id => ({
  type: REMOVE_PLANT,
  id,
});






export const getPlants = () => async (dispatch) => {
  const res = await fetch('/api/plants');
  const plants = await res.json();
  // console.log(plants);
  dispatch(load(plants));
}



export const addPlant = payload => async dispatch => {
  const res = await csrfFetch(`/api/plants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const plant = await res.json();
    dispatch(add(plant));
    return plant;
  }
}



export const editPlant = payload => async dispatch => {
  console.log('PAYLOAD!!!!', payload);
  const res = await csrfFetch(`/api/plants/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if(res.ok) {
    const plant = await res.json();
    dispatch(edit(plant));
    return plant;
  }
}

export const removePlant = (id) => async dispatch => {
  const res = await csrfFetch(`/api/plants/${ id }`, {
      method: 'DELETE',
  })
console.log('YAAAAAYYYYY thunks');
  if(res.ok) {
      await res.json();
      dispatch(remove(id));
    }
    return 'deleted';
}









const plantReducer = (state = [], action) => {
  // let newState;
  switch (action.type) {
    case LOAD:
      const newPlants = {};
      action.plants.forEach(plant => {
        newPlants[plant.id] = plant;
      })
      return {
        ...state,
        ...newPlants
      };

    case ADD_ONE:
        const newState = {
          ...state,
          [action.plant.id]: action.plant,
        };
        return newState;
    case EDIT: {
        return {
            ...state,
            [action.plant.id]: {
                ...state[action.plant.id],
                ...action.plant
            }
        }
    }
    case REMOVE_PLANT: {
      const newState = {...state};
      console.log('REDUCER ACTION: ', action)
      delete newState[action.id];
      return newState;
  }



    default:
      return state;
  }
};

export default plantReducer;
