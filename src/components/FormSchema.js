import * as yup from "yup";

export default yup.object().shape({
    
    title: yup
    .string()
    .required("A Title is required!")
    .min(1, "Your title must be at least one character long"),

    source: yup
    .string()
    .required("A Source is required!")
    .min(1, "Your source must be at least one character long"),

    category: yup
    .string()
    .required("A Category is required!")
    .min(1, "Your category must be at least one character long"),

    ingredients: yup
    .array()
    .required("An ingredient is required!")
    .min(1, "You must have at least one ingredient"),

    directions: yup
    .string()
    .required("Directions are required!")
    .min(1, "Your directions must be at least one character long"),
});