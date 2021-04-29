import React, { useEffect, useState } from 'react';
import '../styles/recipe.css';
import { ReactComponent as BorderPattern } from '../images/border_Pattern.svg'
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth.js'


export default function Recipe(props) {

  const [ingredients, setIngredients] = useState([])
  const [directions, setDirections] = useState("")

    let id = useParams().id
    
useEffect(() => {
    axiosWithAuth()
      .get(`https://tt75-recipes.herokuapp.com/api/recipes/${id}`)
      .then(res => {
          setIngredients(res.data.ingredients)
          setDirections(res.data.instructions)
        console.log(res);
        })
        .catch(err => console.log(err));
    },[id])
 

  return(
    <div className='recipe'>
      <div className="content">
        <h1>Recipe Title</h1>
        <div style={{height:'100px', width: '150px', margin: '0px 80px'}}>
        < BorderPattern/>
        </div>
                 
      <div className="button1">
                {/* TO add on edit function */}
          <button onClick={event =>{} }>Edit</button> <br/>
              <br/>
              {/* to add delete function */}
          <button onClick={() => props.onDelete(props.id) }>Delete</button>
      </div>          
            
        <br/><br/><br/>

      <h2>Ingredients</h2>
        <div className="ingredients">
            {ingredients.map((ingredient) => 
            {return <span>{`${ingredient.measurement } ${ingredient.name} ` } </span>}) } 
        </div>

      <h2>Directions</h2>
         <div className="directions">
              <p>{directions}</p>
          </div>
     </div>
    </div>
  );
}