import React, { useEffect, useState } from 'react';
import '../styles/recipe.css';
import { ReactComponent as BorderPattern } from '../images/border_Pattern.svg'
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth.js'


export default function Recipe(props) {
//   const  { ingredients, directions } = props
  const [ingredients, setIngredients] = useState([])
  const [directions, setDirections] = useState("")

    let id = useParams().id
    console.log(useParams());

useEffect(() => {

    axiosWithAuth().get(`https://tt75-recipes.herokuapp.com/api/recipes/${id}`)
        .then(res => {
          // setRecipes(res.data)
          setIngredients(res.data.ingredients)
          setDirections(res.data.instructions)
        console.log(res);
        })
        .catch(err => console.log(err));
    },[id])
 
  
  
  
  function getIngredients() {
        setIngredients(ingredients.map(ingredient => {
            return (<span>{`${ingredient.name} ${ingredient.mesurements}`} </span>) 

            console.log(ingredient.name);
        }))
    };
    



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
                <button onClick={() => props.onDelete(props.id) }>Delete</button>
                                       
            </div>
            <div className="ingredientsAndDescriptions">
                    <h2>Ingredients</h2>
                    <br/>
                    {ingredients.map((ingredient) => 
                    {return <span>{`${ingredient.measurement } ${ingredient.name} ` } </span>}) }           
                    <h2>Directions</h2>
                        <p>{directions}</p>
            </div>
     </div>
    </div>
  );
}