import React from 'react'
import "./Signin.css"
const Signin = () => {

  // adding files
  return (
    <div className="sign-in-parent">
    <div className="sign-in-form-container">
      <h1 className="index-logo">LOGO</h1>
      <p>Enter Your Credentials to access your account</p>
      <br />
      <form>
        <input
          className="focus"
          type="email"
          placeholder="User Email"
        />
        <br />
        <input
          id="login-password"
          className="focus"
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit" className="submit-button ">
          Sign In
        </button>
        <br />
        <p style={{ color: "red" }}> </p>
        Sign Up
      </form>
    </div>
    <div>
      <p className="para">
        Don't have an account ? SignUp
      </p>
    </div>
  </div>
  )
}

export default Signin