import { Layout } from "./Layout";
import "./AnyAddress.css";
import { Link } from "react-router-dom";
import { CgPlayButton } from "react-icons/cg";

export const AnyAddress = () => {
  return (
    <Layout>
      <div className="any-address-wrapper">
        <h2>Select Address</h2>
        <div className="any-address-container">
          <h2>You Don't Have Any Address</h2>
          <div className="add-any-address-btn-wrapper">
          <button className="add-any-address-btn">
            <Link to="/AnyAddress" className="link-add-any-address">Click Here To Add Any Address</Link>
          </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
