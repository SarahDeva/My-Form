import React from "react";
import useForm from "./useForm";
import { Link, useNavigate } from 'react-router-dom';

const Loginform = ({ submitForm }) => {
    
    let history=useNavigate();
    const users = (localStorage.getItem("USERS") !== null) ? JSON.parse(localStorage.getItem("USERS")) : []
    const { handleChange, values, errors } = useForm(submitForm);

    return (
        <>
            <div className="account">
                <div className="app-wrapper">
                    <div>
                        <h2 className="titles">Login</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="name">
                            <label className="label">Full Name</label>
                            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}></input>
                            {errors.fullname && <p className="error">{errors.fullname}</p>}
                        </div>
                        <div className="password">
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" value={values.password} onChange={handleChange}></input>
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div>
                            <button className="submit" onClick={() => {
                                let nouser = true;
                                Object.keys(users).map(val => {
                                    if (users[val]['fullname'] === values.fullname) {
                                        nouser = false;
                                        console.log(users[val]['password'], values.password)
                                        if (users[val]['password'] === values.password) {
                                            alert('Login Successful!'); 
                                            history('/Webpage');
                                        }
                                        else alert('Wrong Password!');
                                    }
                                })   
                                if (nouser) alert('User Does Not Exist!');
                            }}>
                                <login className="webpage">Login</login> 
                            </button>
                        </div>
                        <div className="direct">
                            <label className="lable">Don't have an Account?</label>
                            <Link to='/Signupform'><signup className="signup">Sign Up</signup></Link>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
};



export default Loginform;