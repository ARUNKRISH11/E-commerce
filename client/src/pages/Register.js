import React from "react";
import Layout from "../components/layout/Layout";

function Register() {
  return (
    <Layout>
      <div>Register</div>
    </Layout>
  );
}

Layout.defaultProps = {
  title: "Register - StoreBuddy",
  description: "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords: "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default Register;
