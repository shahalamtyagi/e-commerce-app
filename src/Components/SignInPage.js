import { Link } from "react-router-dom"
import { LandingPageImage } from "./Image"
import { Layout } from "./Layout"
import "./SignInPage.css"
export const signupPage = ()=>{
 return(
    <Layout>
         <div className="signuppage">
    <div className="signup-main-wrappper">
      <h1>Sign up</h1>
      <form action="">
      <div className="name-input-wrapper">
          <label For="name">Name :</label>
          <br></br>
          <input type="text" name="name" id="name" />
        </div>
        <div className="email-input-wrapper">
          <label For="email">Email :</label>
          <br></br>
          <input type="text" name="email" id="email" />
        </div>
        <div className="password-input-wrapper">
          <label For="password">Password :</label>
          <br></br>
          <input type="password" name="password" id="password" />
        </div>
      
        <div className="signup-button-wrapper">
          <button className="signup-button" type="submit">Sign up</button>
          <div className="sign-up-wrapper">
          <p><Link to="/signuppage" className="sign-up-link">Already have an account</Link></p>

          </div>
        </div>
      </form>
    </div>
  </div>
    </Layout>
   
 )
}