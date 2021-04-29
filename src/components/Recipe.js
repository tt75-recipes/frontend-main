import React, { useState } from 'react';
import '../styles/recipe.css';




export default function Recipe(props) {
//   const  { ingredients, directions } = props
  const [ingredients, setIngredients] = useState([])
  const [directions, setDirections] = useState("")

    function getIngredients() {
        setIngredients(ingredients.map(ingredient => {
            return ingredient.name
            console.log(ingredient.name);
        }))
    };
  
 
  return(
    <div className='recipe'>
      <div className="content">
        <h1>Recipe Title</h1>
            <hr/>
            <hr/>
            <div className="button1">
                {/* TO add on edit function */}
                <button onClick={event =>{} }>Edit</button> <br/>
                <br/>
                <button onClick={() => props.onDelete(props.id) }>Delete</button>
                                       
            </div>
            <div className="ingredientsAndDescriptions">
                    <h2>Ingredients</h2>
                    <br/>
                        <p>{getIngredients}</p>
                    <h2>Directions</h2>
                        {/* <p>`{setDirections {directions.instructions}}`</p> */}
            </div>
     </div>
    </div>
  );
}