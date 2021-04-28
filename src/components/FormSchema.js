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

    ingredient: yup
    .string()
    .required("Ingredients are required!")
    .min(1, "Your ingredient must be at least one character long"),

    measurement: yup
    .string()
    .required("A Measurement is required!")
    .min(1, "Your measurement must be at least one character long"),

    directions: yup
    .string()
    .required("Directions are required!")
    .min(1, "Your directions must be at least one character long"),
});