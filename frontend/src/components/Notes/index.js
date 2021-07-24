import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import {getNotes, addNote, editNote, removeNote} from '../../store/plants.js';


const Notes = ({notes}) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const plants = useSelector(state => {
    return state.plant;
  });


  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const plant = plants[id];

// console.log(plant);

  const [showForm, setShowForm] = useState(false);

  const [errors, setErrors] = useState([])



// notes = Object.values(notes);


// console.log('NOTES FROM NOTESCOMP', notes)





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
    <div className='noteContainer'>
      <h1>HELLO FROM NOTES</h1>
      <div>{notes[0]?.body}</div>
    </div>
  );
}

export default Notes;
