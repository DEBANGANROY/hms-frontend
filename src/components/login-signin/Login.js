import React from 'react'
import "./Login.css"
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const {
    register,
    handleSubmit,
  } = useForm();
  const patient_url = "http://localhost:8081";
  
  const handle = (data) => {
    axios.post(`${patient_url}/authenticate`, data).then((response) => {
      console.log(response);
      //alert("Login Succesfully");
    }, error => {
      console.log(error);
      console.log("error");
      alert("Wrong email id or password")
    });
  };
  const handleError = (errors) => { };

  const navigate = useNavigate();

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit(handle, handleError) }>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            {/* Name */}
            <div className="form-group mt-3">
              <label>Name</label>
              <input type="name" className="form-control mt-1"
                name="userName" placeholder="Enter Name"
                {...register("userName")} />
            </div>

            {/* Password */}
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control mt-1"
                name="userPassword" placeholder="Enter password"
                {...register("userPassword")} />
            </div>
            {/* Submit */}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" 
                onClick={navigate('/appointments')}>
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              or <a href="/registerNewUser">Create Account</a>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
