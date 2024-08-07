
import { useFormik } from "formik";
import "./SignUp.css";
import { basicSchema } from "../../schemas/Index";
import { NavLink, useNavigate } from "react-router-dom";

const onSubmit = async (values, actions, navigate) => {
  localStorage.setItem("user", JSON.stringify(values));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  alert("Registration successful!");
  navigate("/login");
};

const SignUp = () => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, actions) => onSubmit(values, actions, navigate),
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form-auth">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
        min={1}
        max={65}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confrim password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button
        disabled={!isValid || !dirty || isSubmitting}
        className="submit"
        type="submit"
      >
        Submit
      </button>
      <p>If you have acc, log in <NavLink to={'/login'} style={{color:"white"}}>here</NavLink></p>
    </form>
  );
};

export default SignUp;

