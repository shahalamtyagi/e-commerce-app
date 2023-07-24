import { Link, useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import "./SignInPage.css";
import { useState } from "react";
import { postcall } from "./ResuableFunction";

export const SignupPage = () => {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const SignupHandler = async () => {
    const requestBody = {
      name: username,
      email: useremail,
      password: password,
    };
    const signupApiUrl = "/api/auth/signup";
    try {
      const response = await postcall(signupApiUrl, requestBody);
      console.log(response);
      if (response.status === 200) {
        navigate("/ProductPage");
        localStorage.setItem("encodedToken", response.data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <div className="signuppage">
        <div className="signup-main-wrappper">
          <h1>Sign up</h1>
          <form action="">
            <div className="name-input-wrapper">
              <label for="name">Name :</label>
              <br></br>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="email-input-wrapper">
              <label for="email">Email :</label>
              <br></br>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="password-input-wrapper">
              <label For="password">Password :</label>
              <br></br>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
              />
            </div>

            <div className="signup-button-wrapper">
              <Link to="/snpage">
                <button
                  onClick={SignupHandler}
                  className="signup-button"
                  type="submit"
                >
                  Sign up
                </button>
              </Link>
              <div className="sign-up-wrapper">
                <p>
                  <Link to="/signinpage" className="sign-up-link">
                    Already have an account
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
