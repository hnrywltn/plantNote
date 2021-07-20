import React from 'react';
// import { useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import NavigationCSS from './Navigation.module.css';
import { useState } from 'react';
import { addPlant } from '../../store/plants.js';
import { useHistory } from 'react-router-dom';



function AddPlant({ isLoaded }){
  // const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();



  const [name, setName] = useState('');
  const [binomialName, setBinomialName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [sunRequirements, setSunRequirements] = useState('');
  const [userId, setUserId] = useState('');
  const [errors, setErrors] = useState([]);


  const handleSubmit = async(e) => {
    e.preventDefault();

     const plant = await dispatch(addPlant({name, binomialName, imgUrl, description, sunRequirements, userId}))
      // .catch(async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) setErrors(data.errors);
      // });
  //console.log(plant)
      history.push(`/plants/${plant.id}`);
  }



  return (
    <div className="addPlantForm form">
      <div className='addPlantTitle'><h2>Add A Plant to your collection:</h2></div>
      <form onSubmit={handleSubmit}>
        <button className='addPlantButton' type='submit'>Add Plant</button>
        <div className='errorsContainer'>
          <ul>
            {/* map over errors */}
          </ul>
        </div>

        <label>
          Name Of plant:
          <input type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
          />
        </label>
        <label>
          Binomial Name:
          <input type="text"
                 value={binomialName}
                 onChange={(e) => setBinomialName(e.target.value)}
                 required
          />
        </label>
        <label>
          Image Link:
          <input type="text"
                 value={imgUrl}
                 onChange={(e) => setImgUrl(e.target.value)}
                 required
          />
        </label>
        <label>
          Description:
          <input type="text"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 required
          />
        </label>
        <label>
          Sun Requirements:
          <input type="text"
                 value={sunRequirements}
                 onChange={(e) => setSunRequirements(e.target.value)}
                 required
          />
        </label>
        <label>
          UserId:
          <input type="number"
                 value={userId}
                 onChange={(e) => setUserId(e.target.value)}
                 required
          />
        </label>


      </form>
    </div>
  );
}

export default AddPlant;
