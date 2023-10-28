import React, { useState } from "react";
import { Layout } from "./Layout";
import { Link, useNavigate } from "react-router-dom";
import { postcall } from "./ResuableFunction";
import "./LoginPage.css";

export const Login = () => {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const loginHandler = async () => {
    const requestBody = {
      email: useremail,
      password: password,
    };
    const loginApiUrl = "/api/auth/login";
    try {
      const response = await postcall(loginApiUrl, requestBody);
      if (response.status === 200) {
        navigate("/LandingPage");
        localStorage.setItem("encodedToken" ,response.data.encodedToken);

      }
    } catch (error) {
      console.error(error);
    }
  };

  const guestHandler = async () => {
    const requestBody = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    const loginApiUrl = "/api/auth/login";
    try {
      const response = await postcall(loginApiUrl, requestBody);
      if (response.status === 200) {
        navigate("/ProductPage");
        localStorage.setItem("encodedToken" ,response.data.encodedToken);

      }
    } catch (error) {
      console.error(error);
    }

    
  };

  return (
    <Layout>
      <div className="loginpage">
        <div className="login-main-wrappper">
          <h1>Log in</h1>
          <form>
            <div className="email-input-wrapper">
              <label htmlFor="email">Email</label>
              <br />
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="password-input-wrapper">
              <label htmlFor="password">Password</label>
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="forgot-password-wrapper">
              <Link to="/forgotpassword" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>
            <div className="login-button-wrapper">
              <Link to="">
              <button
                className="login-button"
                type="button"
                onClick={loginHandler}
              >
                Login
              </button></Link>
             
              <button
                className="login-button"
                type="button"
                onClick={guestHandler}
              >
                Login as guest
              </button>
              <div className="sign-up-wrapper">
                <p>
                  Not a member?
                  <Link to="/signuppage" className="sign-up-link">
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
