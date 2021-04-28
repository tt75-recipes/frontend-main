import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import Schema from "./FormSchema";


const NewRecipe = () => {

    /// INITIAL STATE VALUES///
    /// INITIAL STATE VALUES///
    /// INITIAL STATE VALUES///

    const initialRecipe = {
        title: '',
        source: '',
        category: '',
        directions: '',
        ingredients: [{ingredient: '',
        measurement: '',
        }]
    }

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
        ingredients: [{ingredient: '',
        measurement: '',
        }]
    }

    const initialDisabled = true;

    const initialIngredientList = [];

    /// STATES ///
    /// STATES ///
    /// STATES ///

    const [recipe, setRecipe] = useState(initialRecipe);
    const [formValues, setFormValues] = useState(initialForm);
    const [ingredientList, setIngredientList] = useState(initialIngredientList);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    ///FUNCTIONS///
    ///FUNCTIONS///
    ///FUNCTIONS///

    /// SUBMIT FUNCTION ///
    /// SUBMIT FUNCTION ///
    /// SUBMIT FUNCTION ///
    
    const submit = (evt) => {
        evt.preventDefault()

        const newRecipe = {
                title: formValues.title,
                source: formValues.source,
                category: formValues.category,
                directions: formValues.directions,
                ingredients: ingredientList,
        }

        setRecipe(newRecipe);
        setFormValues(initialForm);
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

    const addIngredient = (evt) => {
        evt.preventDefault()

        const newIngredient = {
            ingredient: formValues.ingredients[0].ingredient,
            measurement: formValues.ingredients[0].measurement,
        }

        setIngredientList(...ingredientList, newIngredient)

        setFormValues(...formValues, formValues.ingredients[0].ingredient="", formValues.ingredients[0].measurement="", ) ///HELPHELPHELPHELPHELP CAN'T RESET INDIVIDUAL FORM ITEMS TO EMPTY STRING ON BUTTON CLICK///
    }

    /// SIDE EFFECTS ///
    /// SIDE EFFECTS ///
    /// SIDE EFFECTS ///

    useEffect(() => {
        console.log(formValues)
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
    <div>{formErrors.ingredients[0].ingredient}</div>
    <div>{formErrors.ingredients[0].measurement}</div>
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

    {/* INGREDIENTS LABEL BELOW*/}
    {/* INGREDIENTS LABEL BELOW*/}
    {/* INGREDIENTS LABEL BELOW*/}

    <label htmlFor="ingredient" htmlFor="measurement">Ingredients</label>   

    {/* INGREDIENT BELOW*/}
    {/* INGREDIENT BELOW*/}
    {/* INGREDIENT BELOW*/}

    <input
    placeholder="Ingredient..."
    name="ingredient"
    type="text"
    value={formValues.ingredients[0].ingredient}
    onChange={change}
    />

    {/* MEASUREMENT BELOW*/}
    {/* MEASUREMENT BELOW*/}
    {/* MEASUREMENT BELOW*/}

    <input
    placeholder="Measurement..."
    name="measurement"
    type="text"
    value={formValues.ingredients[0].measurement}
    onChange={change}
    />

    <button onClick={addIngredient}>ADD</button>

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