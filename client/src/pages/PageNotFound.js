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

Layout.defaultProps = {
  title: "404 - StoreBuddy",
  description:
    "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords:
    "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default PageNotFound;
