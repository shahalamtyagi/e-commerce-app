import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="footer-container">
     

      <a className="footer-icon" href="/">
        <BsGithub className="github-icon" />
      </a>
      <a className="footer-icon" href="/">
        <FaFacebook className="facebook-icon" />
      </a>
      <a className="footer-icon" href="/">
        <BsInstagram className="instagram-icon" />
      </a>
     
    </div>
  );
};
