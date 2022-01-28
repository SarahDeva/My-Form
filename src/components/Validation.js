import * as Yup from "yup";

const validationSchema = Yup.object({
    fullname: Yup.string().required("Required").min(5).max(20),
    email: Yup.string().email().required("Required").min(10).max(20),
    phonenumber: Yup.number().required("Required").min(10).max(12),
    password: Yup.string().required("Required").min(8),
    repassword: Yup.string().required("Required").min(8).oneOf(
        [Yup.ref('password'), null],
         'Passwords must match',
       )
  });

const Validation = (values) => {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = "Name is required."
    } else if (values.fullname.length < 5) {
        errors.fullname = "Name must be more than 5 characters."
    }

    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email is Invalid."
    }

    if (!values.phonenumber) {
        errors.phonenumber = "Phone Number is required."
    } else if (values.phonenumber.length !== 10) {
        errors.phonenumber = "Phone Number must be 10 numbers."
    }
    // else if(/^(\+91-|\+91|0)?\d{10}$/.test(values.phonenumber)){
    //     errors.phonenumber="Phone Number is Invalid."
    // }

    if (!values.password) {
        errors.password = "Password is required."
    } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters."
    }


    if (!values.repassword) {
        errors.repassword = "Re-entering the Password is required."
    } else if (values.password !== values.repassword) {
        errors.repassword = "Re-Entering the Password must be same as Password."
    }

    return errors;
};

export default Validation;