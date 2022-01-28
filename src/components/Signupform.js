import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import { useState, useEffect } from "react";
import useForm from "./useForm";

const validationSchema = Yup.object({
    fullname: Yup.string().required("Name is Required").min(5).max(20),
    email: Yup.string().email().required("Email is Required").min(10).max(30),
    phonenumber: Yup.number().required("Phone number is Required").min(10),
    password: Yup.string().required("Password is Required").min(8),
    repassword: Yup.string().required("Re-Entering the password is Required").min(8).oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
    )
});

const Signupform = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm);
    // const users = (localStorage.getItem("USERS") !== null) ? JSON.parse(localStorage.getItem("USERS")) : []
    // const [values, setValues] = useState({
    //     fullname: "",
    //     email: "",
    //     phonenumber: "",
    //     password: "",
    //     repassword: "",
    // });

    // const [errors, setErrors] = useState({});
    // const [dataIsCorrect, setdataIsCorrect] = useState(false);

    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setdataIsCorrect(true);
    // }

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //         //users.push({ values[fullname]= values });   
    //         let username = values.fullname;
    //         const userobj = { username: values };
    //         console.log(username, userobj);
    //         users.push(values);
    //         localStorage.setItem("USERS", JSON.stringify(users));
    //         submitForm(true);
    //     }
    // }, [errors]);

    return (
       
        <Formik
            initialValues={{ fullname: "", email: "", phonenumber: "", password: "", repassword: "" }}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({handleChange, handleSubmit, errors, values}) => (
                <form className="form-wrapper">
                    <div className="account">
                        <div className="app-wrapper">
                            <div>
                                <h2 className="title">Create Account</h2>
                            </div>
                            <div className="name">
                                <label className="label">Full Name</label>
                                <input className="input"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.fullname}
                                    name="fullname" />
                                {errors.fullname}</div>
                            <div className="email">
                                <label className="label">Email</label>
                                <input className="input"
                                    type="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email" />
                                {errors.email}</div>
                            <div className="number">
                                <label className="label">Phone Number</label>
                                <input className="input"
                                    type="number"
                                    onChange={handleChange}
                                    value={values.phonenumber}
                                    name="phonenumber" />
                                {errors.phonenumber}</div>
                            <div className="password">
                                <label className="label">Password</label>
                                <input className="input"
                                    type="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password" />
                                {errors.password}</div>
                            <div className="repassword">
                                <label className="label">Re-enter Password</label>
                                <input className="input"
                                    type="password"
                                    onChange={handleChange}
                                    value={values.repassword}
                                    name="repassword" />
                                {errors.repassword}</div>
                            <div>
                                <button className="submit" onClick={handleSubmit} type="submit">Sign Up</button></div>
                        </div>
                    </div>
                </form>
            )
            }
        </Formik>
    );
}

export default Signupform;

/*
                    <form >
                        const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);
                            
                            <input  type="text" name="fullname" value={values.fullname} onChange={handleChange}></input>
                            {errors.fullname && <p className="error">{errors.fullname}</p>}
                       
                       
                            
                            <input className="input" type="email" name="email" value={values.email} onChange={handleChange}></input>
                            {errors.email && <p className="error">{errors.email}</p>}
                        
                          
                            <input className="input" type="number" name="phonenumber" value={values.phonenumber} onChange={handleChange}></input>
                            {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                      typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point")

                       
                           
                            <input className="input" type="password" name="password" value={values.password} onChange={handleChange}></input>
                            {errors.password && <p className="error">{errors.password}</p>}
                       
                       
                           
                            <input className="input" type="password" name="repassword" value={values.repassword} onChange={handleChange}></input>
                            {errors.repassword && <p className="error">{errors.repassword}</p>}
                        
                        <div>
                            <button  onClick={handleFormSubmit}  >
                                Sign Up
                            </button>
                        </div>
                    </form>
                 */
