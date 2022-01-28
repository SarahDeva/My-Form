import { useState, useEffect } from "react";
// import Validation from "./Validation";

const useForm = (submitForm) => {

    const users = (localStorage.getItem("USERS") !== null) ? JSON.parse(localStorage.getItem("USERS")) : []
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        phonenumber: "",        
        password: "",
        repassword: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setdataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(values);
        setdataIsCorrect(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            //users.push({ values[fullname]= values });
            let username = values.fullname; 
            const userobj = {username:values};
            console.log(username,userobj); 
            users.push(values);
            localStorage.setItem("USERS", JSON.stringify(users));
            submitForm(true);

        }                      
    }, [errors]);
    return { handleChange, handleFormSubmit, errors, values };
}                                                                                       
export default useForm; 