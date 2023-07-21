import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import "./LoginPage.css";
export const Login = () => {
  return (
	<Layout>
		 <div className="loginpage">
      <div className="login-main-wrappper">
        <h1>Log in</h1>
        <form action="">
          <div className="email-input-wrapper">
            <label For="email">Email</label>
            <br></br>
            <input type="text" name="email" id="email" placeholder="Enter email"/>
          </div>
          <div className="password-input-wrapper">
            <label For="password">Password</label>
            <br></br>
            <input type="password" name="password" id="password" placeholder="Enter Password"/>
          </div>
          <div className="forgot-password-wrapper">
          <a href=""className="forgot-password-link">Forgot Password?</a>

          </div>
          <div className="login-button-wrapper">
            <button className="login-button" type="submit">Login</button>
			<div className="sign-up-wrapper">
			<p>Not a member?<Link to="/signinpage" className="sign-up-link" href="/">signup now</Link></p>

			</div>
          </div>
        </form>
      </div>
    </div>
	</Layout>
   
  );
};
