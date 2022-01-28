import React, { useState } from "react";
import Signupform from "./Signupform";
import Signupformsuccess from "./Signupformsuccess";


const Form = () => {
    const [formIsSubmitted, setformIsSubmitted] = useState(false);

    const submitForm = () => {
        setformIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? <Signupform submitForm={submitForm} /> : <Signupformsuccess />}
        </div>
    );
};

export default Form;