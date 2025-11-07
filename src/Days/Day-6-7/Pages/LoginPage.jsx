import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export function LoginPage() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true)
  // const [emailError, setEmailError] = useState(false)
  // const[passwordError, setPassError] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: yup.object().shape({
      email: yup.string()
        .email("please enter a valid email")
        .required("Required")
    }),
    onSubmit: values => {
      // debugger
      const data = JSON.parse(localStorage.getItem('formData'))
      {
        values.email === data.email ? values.password === data.password ? navigate("/profile") : setErrors(prev => ({ ...prev, email: 'Invalid password' })) : setErrors(prev => ({ ...prev, email: 'Invalid email address.' }));
      }


    },
  })
  return (
    <>

      <div className="m-3 md:py-40 md:px-25">
        <form onSubmit={formik.handleSubmit}
          className="md:flex md:flex-col border-1 md:w-120 md:max-w-120 rounded-md place-self-center">
          <h1 className="text-4xl text-center md:m-4 font-bold">Login Form</h1>
          <label htmlFor="email" className="md:m-2 p-2 font-bold">Email:</label>
          <input type="text" name="email" id="email"
            placeholder="ellad@example.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            autoComplete="off"
            className="md:mx-4 border-b-1 border-black"
          />
          {/* {
            formik.touched.email && formik.errors.email ? (
              <div className="md:m-4 text-red-800 font-bold">{formik.errors.email}</div>
            ) : null
          } */}


          <label htmlFor="password" className="md:m-2 p-2 font-bold">Password:</label>


          <input type={showPassword ? 'password' : 'text'} name="password" id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="md:mx-4 border-b-1 border-black"
          />
          <span className="absolute right-118 top-102" onClick={() => {
            setShowPassword(!showPassword)
          }}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

          <div>
          {
            errors.email==''?errors.password==''?<></>:<div className="p-2 text-red-800 font-bold m-2">{errors.password}</div>:
              <div className="p-2 text-red-800 font-bold m-2">{errors.email}</div>
          }
          </div>
         
          <button type="submit" className="bg-black md:p-2 rounded-xl font-bold text-white md:text-xl md:m-3">Login</button>
          <p className="text-center md:p-2">Don't have any account?
            <Link to="/signup" className="underline font-black"> Signup</Link>
          </p>
        </form>
      </div>
    </>
  )
}