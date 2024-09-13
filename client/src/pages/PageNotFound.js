import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Layout>
      <div className="page-not-found">
        <p>Page Not Found - 404!</p>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to={"/"} className="btn ">
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
