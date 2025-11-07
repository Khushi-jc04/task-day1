import { useFormik } from "formik"
import * as yup from "yup"
import { Link, useAsyncError } from "react-router-dom"
import { useEffect, useState } from "react"
import Select from "react-select"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import { useQuill } from 'react-quilljs';
import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom"

const options = [
    { value: "secondary", label: "Secondary" },
    { value: "senior secondary", label: "Senior Secondary" },
    { value: "graduation", label: "Graduation" },
    { value: "post graduation", label: "Post Graduation" },

]

const skills = [
    { value: "cpp", label: "C++" },
    { value: "react", label: "React" },
    { value: "node", label: "Node" },
    { value: "mongodb", label: "Mongodb" },

]

export function SignupPage() {

    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(true)
    useEffect(() => {
        // debugger
        const storedData = localStorage.getItem('formData')
        if (storedData) {
            const paresed = JSON.parse(storedData)
            console.log(paresed)
            // setData(paresed)
            formik.setValues(paresed)
        }
    }, [])
    const handleReset = (e) => {
        e.preventDefault();
        localStorage.removeItem('formData')
    }
    const showAlert = () => {
        Swal.fire({
            title: 'You are signup successfully,Login to visit your Profile',
            text: 'Click "Continue" to proceed.',
            showCancelButton: true,
            confirmButtonText: 'Login',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/")
            }
        });
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            skill: [],
            education: null,
            phone: "",
            editor: '',

        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .min(2, "Username must be at least 2 characters long")
                .required("Username is required"),
            email: yup.string()
                .email("please enter a valid email")
                .required("Email is required"),
            password: yup
                .string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters")
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                // .matches(/[A-Z]/, 'Password must contain at least one upperrcase letter')
                .matches(/[0-9]/, 'Password must contain at least one number')
            // .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one symbol')
            ,
            confirmPassword: yup
                .string()
                .required("confirm your password")
                .oneOf([yup.ref("password"), null], "Passwords must match"),
            phone: yup.string()
                .required("contact is required"),

        }),
        onSubmit: (values) => {
            // console.log(values)
            console.log(values.photo)

            localStorage.setItem('formData', JSON.stringify(values));

        }
    })
    const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = formik;
    // { console.log(values) }
    return (
        <>
            <div className="place-self-center">
                <form onSubmit={handleSubmit}
                    className="md:flex md:flex-col border-1 border-black md:w-150 md:max-w-190 rounded-md">
                    <h1 className="text-4xl text-center md:m-4 font-bold">Signup Form</h1>

                    <label htmlFor="name" className="md:m-2 md:p-2 font-bold">Name:</label>
                    <input type="text" name="name" id="name"
                        placeholder="Ellad verma"
                        onChange={handleChange}
                        value={values.name}
                        className="md:mx-4 border-b-1 border-black"
                    />
                    {
                        touched.name && errors.name ?
                            (<div className="md:m-4 text-red-800 font-bold">{errors.name}</div>) : null
                    }


                    <label htmlFor="email" className="md:m-2 p-2 font-bold">Email:</label>
                    <input type="text" name="email" id="email"
                        placeholder="ellad@example.com"
                        onChange={handleChange}
                        value={values.email}
                        className="md:mx-4 border-b-1 border-black"
                    />
                    {
                        touched.email && errors.email ? (
                            <div className="md:m-4 text-red-800 font-bold">{errors.email}</div>
                        ) : null
                    }


                    <label htmlFor="password" className="md:m-2 p-2 font-bold">Password:</label>
                    <div className="flex border-b-1 md:mx-4">
                        <input type={showPassword ? 'password' : 'text'} name="password" id="password"
                            onChange={handleChange}
                            value={values.password}

                            className="w-140"
                        />
                        <span className="relative right-6 top-1" onClick={() => {
                            setShowPassword(!showPassword)
                        }}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {
                        touched.password && errors.password ? (
                            <div className="md:m-4 text-red-800 font-bold">{errors.password}</div>
                        ) : null
                    }


                    <label htmlFor="confirmPassword" className="md:m-2 p-2 font-bold">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        className="md:mx-4 border-b-1 border-black"
                    />
                    {
                        touched.password && errors.confirmPassword ? (
                            <div className="md:m-4 text-red-800 font-bold">{errors.confirmPassword}</div>
                        ) : null
                    }


                    <label htmlFor="education" className="md:m-2 p-2 font-bold">Higher Education</label>
                    <Select
                        className="md:mx-4 border-b-1 border-black"
                        name="education"
                        value={values.education}
                        onChange={(selectedOption) => {
                            setFieldValue('education', selectedOption);
                        }}
                        options={options}
                    />


                    <label htmlFor="skill" className="md:m-2 p-2 font-bold">Skills</label>
                    <Select
                        className="md:mx-4 border-b-1 border-black"
                        name="skill"
                        value={values.skill}
                        closeMenuOnSelect={false}
                        onChange={(selectedOptions) => setFieldValue('skill', selectedOptions)}
                        options={skills}
                        isMulti={true}
                    />


                    <label htmlFor="phone" className="md:m-2 p-2 font-bold">Contact:</label>
                    <PhoneInput
                        name="phone"
                        className="md:mx-4"
                        country={'us'}
                        value={values.phone}
                        onChange={(phoneValue) => {
                            setFieldValue('phone', phoneValue);
                        }}
                    />
                    {
                        touched.phone && errors.phone ? (
                            <div className="md:m-4 text-red-800 font-bold">{errors.phone}</div>
                        ) : null
                    }

                    <ReactQuill theme="snow" value={values.editor} onChange={(value) => setFieldValue('editor', value)}
                        className="md:m-4"
                    />
                    {/* <div dangerouslySetInnerHTML={{ __html: values.editor }} className=""></div> */}




                    <button type="submit" className="bg-black md:p-2 rounded-xl font-bold text-white md:text-xl md:m-3" onClick={showAlert}>Signup</button>
                    <button onClick={handleReset} className="bg-black md:p-2 rounded-xl font-bold text-white md:text-xl md:m-3"
                    >Reset</button>
                    <p className="text-center md:p-2">
                        <Link to="/" className="underline font-black"> Back to Login</Link>
                    </p>
                </form>
            </div>
        </>
    )

}