import { csrfFetch } from './csrf';
const LOAD = 'plants/';

const ADD_ONE = 'plants/ADD_ONE';


const load = plants => ({
  type: LOAD,
  plants,
});

const add = plant => ({
  type: ADD_ONE,
  plant,
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
      if (!state[action.plant.id]) {
        const newState = {
          ...state,
          [action.plant.id]: action.plant,
        };
        return newState;
      }
      return {
        ...state,
        [action.plant.id]: {
          ...state[action.plant.id],
          ...action.plant,
        }
      };




    default:
      return state;
  }
};

export default plantReducer;
