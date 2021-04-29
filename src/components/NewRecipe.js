import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import Schema from "./FormSchema";
import {axiosWithAuth} from "../axiosWithAuth";


/// TO DO ///               Add submit button functionality (post to api, etc)
/// TO DO ///               Display ingredient list in UI with ability to remove an ingredient via an x button next to individual ingredient
/// TO DO ///               Add CSS to entire component
/// TO DO ///               
/// TO DO ///
/// TO DO ///


const NewRecipe = () => {

    const history = useHistory();

    /// INITIAL STATE VALUES///
    /// INITIAL STATE VALUES///
    /// INITIAL STATE VALUES///

    const initialForm = {
        title: '',
        source: '',
        category: '',
        directions: '',
        ingredients: [],
    }

    const initialFormErrors = {
        title: '',
        source: '',
        category: '',
        directions: '',
        ingredients: [],
    }

    const initialDisabled = true;


    /// STATES ///
    /// STATES ///
    /// STATES ///

    const [formValues, setFormValues] = useState(initialForm);
    const [ingValue, setIngValue] = useState({
        ingredient: "",
        measurement: ""
    });
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [ingredientList, setIngredientList] = useState([]);

    ///FUNCTIONS///
    ///FUNCTIONS///
    ///FUNCTIONS///

    /// SUBMIT FUNCTION ///
    /// SUBMIT FUNCTION ///
    /// SUBMIT FUNCTION ///
    
    const submit = (evt) => {
        evt.preventDefault()

        const newRecipe = {
                title: formValues.title.trim(),
                source: formValues.source.trim(),
                instructions: formValues.directions.trim(),
                ingredients: formValues.ingredients,
                category: formValues.category.trim(),
        }

        axiosWithAuth()
        .post("https://tt75-recipes.herokuapp.com/api/recipes/", newRecipe)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })

        setFormValues(initialForm);

         history.push('/')
    }

    /// CHANGE FUNCTION ///
    /// CHANGE FUNCTION ///
    /// CHANGE FUNCTION /// 

    const change = (evt) => {
        const {name, value} = evt.target;

        yup.reach(Schema, name)
        .validate(value)
        .then(()=> {
            setFormErrors({
                ...formErrors, [name]: "",
            });
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors, [name]: err.errors[0],
            })
        })

        setFormValues({...formValues, [name]: value})
    }

    /// CHANGE INGREDIENT FUNCTION ///
    /// CHANGE INGREDIENT FUNCTION ///
    /// CHANGE INGREDIENT FUNCTION ///

    const ingChange = (evt) => {
        const {name, value} = evt.target;

        setIngValue({...ingValue, [name]: value})
    }

    /// ADD INGREDIENT FUNCTION ///
    /// ADD INGREDIENT FUNCTION ///
    /// ADD INGREDIENT FUNCTION ///

    const addIng = (evt) => {
        evt.preventDefault()

        setFormValues({...formValues, ingredients : [...formValues.ingredients , {measurement: ingValue.measurement, ingredient: ingValue.ingredient}]})
        setIngredientList([...ingredientList, `${ingValue.measurement} ${ingValue.ingredient}`])
        setIngValue({measurement: "", ingredient: ""})
    }

    /// REMOVE INGREDIENT FUNCTION ///
    /// REMOVE INGREDIENT FUNCTION ///
    /// REMOVE INGREDIENT FUNCTION ///
    
    const removeIng = (i) => {

        const newIngredientList = [];

        ingredientList.forEach((ingredient, index) => {
            
            if (index !== i) {
               newIngredientList.push(ingredient);
            }

        })

        setIngredientList(newIngredientList);
    }

    /// HOMEPAGE FUNCTION ///
    /// HOMEPAGE FUNCTION ///
    /// HOMEPAGE FUNCTION ///

    const goHome = (evt) => {
        evt.preventDefault()
        history.push('/')
    }

    /// SIDE EFFECTS ///
    /// SIDE EFFECTS ///
    /// SIDE EFFECTS ///

    useEffect(() => {
        Schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])

            /// JSX ///
            /// JSX ///
            /// JSX ///
            /// JSX ///
            /// JSX ///

return (
    <>
    <form onSubmit={submit}>

    <button onClick={goHome}>
        X
    </button>

    {/* SOURCE BELOW*/}
    {/* SOURCE BELOW*/}
    {/* SOURCE BELOW*/}

    <label htmlFor="source">Source</label>

    <input
    placeholder="Source..."
    name="source"
    type="text"
    value={formValues.source}
    onChange={change}
    />

    {/* VALIDATION ERRORS UI BELOW */}
    {/* VALIDATION ERRORS UI BELOW */}
    {/* VALIDATION ERRORS UI BELOW */}

    <div className="errors">
    <div>{formErrors.title}</div>
    <div>{formErrors.source}</div>
    <div>{formErrors.category}</div>
    <div>{formErrors.ingredients}</div>
    <div>{formErrors.directions}</div>
    </div>

    {/* TITLE BELOW*/}
    {/* TITLE BELOW*/}
    {/* TITLE BELOW*/}

    <label htmlFor="title">Title</label>

    <input
    placeholder="Title..."
    name="title"
    type="text"
    value={formValues.title}
    onChange={change}
    />

    {/* CATEGORY BELOW*/}
    {/* CATEGORY BELOW*/}
    {/* CATEGORY BELOW*/}

    <label htmlFor="category">Category</label>
    
    <input
    placeholder="Category..."
    name="category"
    type="text"
    value={formValues.category}
    onChange={change}
    />


    {/* INGREDIENT BELOW*/}
    {/* INGREDIENT BELOW*/}
    {/* INGREDIENT BELOW*/}

    <div>
        {ingredientList.map((ingredient, index)=> {
            return <div key={index}> <span onClick={() => removeIng(index)}> (x) </span> <span> {ingredient} </span> </div>
        })}
    </div>

        <fieldset>
        <legend> Ingredients </legend>
    <input
    placeholder="Ingredient..."
    name="ingredient"
    type="text"
    value={ingValue.ingredient}
    onChange={ingChange}
    />

    {/* MEASUREMENT BELOW*/}
    {/* MEASUREMENT BELOW*/}
    {/* MEASUREMENT BELOW*/}

    <input
    placeholder="Measurement..."
    name="measurement"
    type="text"
    value={ingValue.measurement}
    onChange={ingChange}
    />
  
    </fieldset>

    <button onClick={addIng}>ADD</button>

    {/* DIRECTIONS BELOW*/}
    {/* DIRECTIONS BELOW*/}
    {/* DIRECTIONS BELOW*/}

    <label htmlFor="directions">Directions</label>
    
    <input
    placeholder="Directions..."
    name="directions"
    type="text"
    value={formValues.directions}
    onChange={change}
    />

    <button type="submit" disabled={disabled}>ADD RECIPE!</button>

    {/* END OF FORM! */}
    {/* END OF FORM! */}
    {/* END OF FORM! */}

    </form>
    </>
)

}


export default NewRecipe;