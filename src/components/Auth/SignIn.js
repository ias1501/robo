"use client";
import Head from "next/head";
// import HeroSection from "src/components/HeroSection";
// import Navbar from "src/components/components/Navbar";
import React, { useEffect } from "react";
import { useState } from "react";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import './auth.css'
import { useAuth, VIEWS } from "../AuthProvider";
import supabase from "src/lib/supabase-browser";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import SignUp from "./SignUp";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
const SignUpSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});
const SignIn = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorMsg1, setErrorMsg1] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg1(error.message);
    } else {
      setSuccessMsg('Success! Please check your email for further instructions.');
    }
  }
  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      signUpButton.removeEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.removeEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    };
  }, []);

  return (
    <div>
      
      <div className="container" id="container">
        <div className="form-container sign-up-container">
        <SignUp />
        </div>
        <div className="form-container sign-in-container">
        <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={signIn}
                  >
                    {({ errors, touched }) => (
                      <Form className="w-full p-4">
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="mb-2 block rounded text-sm font-bold text-gray-700"
                          >
                            Email
                          </label>
                          <Field
                            className={cn(
                              "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight focus:outline-none",
                              errors.email && touched.email && "bg-red-50"
                            )}
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                          />
                          {errors.email && touched.email ? (
                            <div className="text-xs text-red-600">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="password"
                            className="mb-2 block rounded text-sm font-bold text-gray-700"
                          >
                            Password
                          </label>
                          <Field
                            className={cn(
                              "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight focus:outline-none",
                              errors.password && touched.password && "bg-red-50"
                            )}
                            id="password"
                            name="password"
                            type="password"
                          />
                          {errors.password && touched.password ? (
                            <div className="text-xs text-red-600">
                              {errors.password}
                            </div>
                          ) : null}
                        </div>

                        <div className="mb-6 flex items-center text-sm text-gray-700">
                          <input
                            type="checkbox"
                            name="Remember"
                            className="mr-2"
                          />
                          <label htmlFor="Remember">Remember me</label>
                        </div>

                        <button
                          className="link mb-4 block text-sm text-black"
                          type="button"
                          onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
                          // href='/auth/resetpassword'
                        >
                          Forgot your password?
                        </button>

                        <button
                          className="w-full rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
                          type="submit" 
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SignIn;





// <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><FaFacebook /></a>
//               <a href="#" className="social"><FaGoogle/></a>
//               <a href="#" className="social"><FaLinkedin/></a>
//             </div>










// <Formik
//                     initialValues={{
//                       email: "",
//                       password: "",
//                     }}
//                     validationSchema={SignInSchema}
//                     onSubmit={signIn}
//                   >
//                     {({ errors, touched }) => (
//                       <Form className="w-full p-4">
//                         <div className="mb-6">
//                           <label
//                             htmlFor="email"
//                             className="mb-2 block rounded text-sm font-bold text-gray-700"
//                           >
//                             Email
//                           </label>
//                           <Field
//                             className={cn(
//                               "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight focus:outline-none",
//                               errors.email && touched.email && "bg-red-50"
//                             )}
//                             id="email"
//                             name="email"
//                             placeholder="jane@acme.com"
//                             type="email"
//                           />
//                           {errors.email && touched.email ? (
//                             <div className="text-xs text-red-600">
//                               {errors.email}
//                             </div>
//                           ) : null}
//                         </div>

//                         <div className="mb-6">
//                           <label
//                             htmlFor="password"
//                             className="mb-2 block rounded text-sm font-bold text-gray-700"
//                           >
//                             Password
//                           </label>
//                           <Field
//                             className={cn(
//                               "input focus:shadow-outline w-full rounded border px-3 py-2 leading-tight focus:outline-none",
//                               errors.password && touched.password && "bg-red-50"
//                             )}
//                             id="password"
//                             name="password"
//                             type="password"
//                           />
//                           {errors.password && touched.password ? (
//                             <div className="text-xs text-red-600">
//                               {errors.password}
//                             </div>
//                           ) : null}
//                         </div>

//                         <div className="mb-6 flex items-center text-sm text-gray-700">
//                           <input
//                             type="checkbox"
//                             name="Remember"
//                             className="mr-2"
//                           />
//                           <label htmlFor="Remember">Remember me</label>
//                         </div>

//                         <button
//                           className="link mb-4 block text-sm text-black"
//                           type="button"
//                           onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
//                           // href='/auth/resetpassword'
//                         >
//                           Forgot your password?
//                         </button>

//                         <button
//                           className="w-full rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
//                           type="submit" 
//                         >
//                           Submit
//                         </button>
//                       </Form>
//                     )}
//                   </Formik>