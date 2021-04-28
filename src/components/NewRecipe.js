import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import Schema from "./FormSchema";


const NewRecipe = () => {

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
                ingredients: formValues.ingredients,
        }

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

        setFormValues({...formValues, ingredients : [...formValues.ingredients , `${ingValue.measurement} ${ingValue.ingredient}`]})
        setIngValue({measurement: "", ingredient: ""})
    }

    /// REMOVE INGREDIENT FUNCTION ///
    /// REMOVE INGREDIENT FUNCTION ///
    /// REMOVE INGREDIENT FUNCTION ///

    const removeIng = (evt) => {

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

    {/* INGREDIENTS LABEL BELOW*/}
    {/* INGREDIENTS LABEL BELOW*/}
    {/* INGREDIENTS LABEL BELOW*/}

    <label htmlFor="ingredient" htmlFor="measurement">Ingredients</label>   

    {/* INGREDIENT BELOW*/}
    {/* INGREDIENT BELOW*/}
    {/* INGREDIENT BELOW*/}

    <div>
        {formValues.ingredients.forEach(ingredient=> {
            <div> <span > (x) </span> <span> {ingredient} </span></div>
        })}
    </div>

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