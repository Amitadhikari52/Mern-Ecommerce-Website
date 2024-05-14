import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout title={"go back - Page not found"}>
      <div className="pnf">
        <img
          src="/images/notfound.png"
          alt="contactus"
          width="350"
          height="350"
        />
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
