import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/img2.png"


const Register = () => {
  return (
    <div className="formbg">
      <Link to="/">
        <div className="position-absolute top-0 start-0 p-5">
          <span className="main-color-bg text-white rounded-circle p-3">
            PZ
          </span>{" "}
          <span className="text-white"> Perfume </span>
        </div>
      </Link>
      <form
        style={{ width: "640px" }}
        className="w-50 mx-auto   p-3 p-lg-5 rounded-2 bg-white"
      >
        <div>
          <h1 className="fw-5"> Get started</h1>
          <p>Lets get started by filling out the information below</p>
        </div>
        <div className="d-flex flex-column flex-lg-row my-3 gap-1">
          <div className="w-50">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="Firstname"
              className="form-control w-100"
              placeholder="Enter Name"
            />
          </div>
          <div className="w-50">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="Lastname"
              className="form-control w-100"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="text"
          id="Email"
          className="form-control"
          placeholder="Enter your email"
        />
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          type="text"
          id="Password"
          className="form-control"
          placeholder="Enter your Password"
        />
        <label htmlFor="Confirm password" className="form-label">
          Confirm password
        </label>
        <input
          type="text"
          id="password"
          className="form-control"
          placeholder="Confirm your password"
        />
        <div>
          <input type="checkbox" className="form-check-input mt-2" />I agree to{" "}
          <a href="##">Terms of Service</a> and{" "}
          <a href="#"> Privacy Policies</a>{" "}
        </div>
        <button
          style={{ backgroundColor: "#8D34FF", height: "64px" }}
          className="text-white mt-2 border-0 rounded-4 w-100"
        >
          Register
        </button>
        <p className="text-center my-2 container ">or</p>
        <button  style={{ height: "64px" }} className="border-0 rounded-4 w-100" >
          <img src={google} alt="" />
          Continue with Google
        </button>
        <p className="text-center my-2">
          Already have an account? <Link to="/login">Sign In</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
