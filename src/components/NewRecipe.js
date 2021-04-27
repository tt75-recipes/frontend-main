import React, {useState, useEffect} from "react";
import axios from "axios";




const NewRecipe = () => {

    /// INITIAL STATE VALUES///
    /// INITIAL STATE VALUES///
    /// INITIAL STATE VALUES///

    const initialRecipe = {
        title: '',
        source: '',
        category: '',
        directions: '',
        ingredients: [{name: '',
        measurement: '',
        unit: '',
        }]
    }

    const initialForm = {
        title: '',
        source: '',
        category: '',
        directions: '',
        ingredients: [{name: '',
        measurement: '',
        unit: '',
        }]
    }

    const initialFormErrors = {
        title: '',
        source: '',
        category: '',
        directions: '',
        ingredients: [{name: '',
        measurement: '',
        unit: '',
        }]
    }

    const initialDisabled = true;

    /// STATES ///
    /// STATES ///
    /// STATES ///

    const [recipe, setRecipe] = useState(initialRecipe);
    const [formValues, setFormValues] = useState(initialForm);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disable, setDisable] = useState(initialDisabled);


return (
    <>

    </>
)

}


export default NewRecipe;