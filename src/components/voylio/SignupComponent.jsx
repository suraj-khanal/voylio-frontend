import { useNavigate } from "react-router-dom";
//import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { signupUser } from "./api/HelloWorldApiService";
import {toast} from 'react-toastify';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { animateSignupForm } from "./animation/Animation";

export default function SignupComponent() {

  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [showErrorMessage, setShowErrorMessage] = useState(false)

  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }
  // function handleUsernameChange(event) {
  //   setUsername(event.target.value);
  // }
  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }

  useEffect(() => {
    animateSignupForm();
  },[]);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
      username: Yup.string()
            .min(5, "Must be 5 characters or more")
            .required("Required"),
      email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
      password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .matches(/^(?=.*[a-z])/, "Must contain at least one lower-case letter" )
            .matches(/^(?=.*[A-Z])/, "Must contain at least one upper-case letter")
            .matches(/^(?=.*\d)/, "Must contain at least one numeric digit")
            .matches(/^(?=.*[^\w\d\s:])/, "Must contain at least one special character")
            .required("Required")
    }),
    onSubmit: async (values) => {
      try {
        const response = await signupUser({
          name: values.name,
          username: values.username,
          email: values.username,
          password: values.password
      })
        if (response.status === 201) {
          // Signup was successful, trigger the toast message
          showSignupToastMessage();
          navigate("/login");
        } 
        else {
          setShowErrorMessage(true);
        }
      } catch (error) {
        console.error("Error signing up user", error);
        setShowErrorMessage(true);
      }     
    }
  });

  console.log(formik.touched)


  function showSignupToastMessage () {
    toast("Signed Up Successfully !!", 
              {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                type: "success",
                theme: "colored",
                })
  }

const navigate = useNavigate()

//const authContext = useAuth()


// async function handleSubmitSignup(event) {
//     event.preventDefault();

//     try {
//       const response = await signupUser({
//         name,
//         username,
//         email,
//         password
//     })
//       if (response.status === 201) {
//         // Signup was successful, trigger the toast message
//         showSignupToastMessage();
//         navigate("/login");
//       } 
//       else {
//         setShowErrorMessage(true);
//       }
//     } catch (error) {
//       console.error("Error signing up user", error);
//       setShowErrorMessage(true);
//     }
//   }
    
    return (
      <div className="signup-page">
        <div className="form">
          {showErrorMessage && (
            <div className="errorMessage text-center">
              Signup Failed!! Please Try Again
            </div>
          )}
          <form className="signup-form" onSubmit={formik.handleSubmit} >
            <h2 className="text-center mb-4 fw-bold">Signup To Voylio</h2>
            <hr />
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null }
            </div>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.username && formik.errors.username ? <p>{formik.errors.username}</p> : null }
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
               { formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null }
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null }
            </div>
            <div>
              <button type="submit" name="signup"> 
                Signup
              </button>
            </div>
            <div>
              <p className="message">Already registered? &nbsp;
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
    
          
        </div>
      </div>
    )
  }
  
  