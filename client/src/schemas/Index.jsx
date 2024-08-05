import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 karaktera, 1 veliko slovo, 1 maalo slovo, 1 broj

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required"),

})


