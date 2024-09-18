import React from "react";
import Layout from "../../components/layout/Layout";

function Register() {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title"> Register</h1>
        <div className="row">
          <div className="col-md-6 ">
            <form className="page-content">
              <p classNme="page-title"></p>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Edwin Thomas"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="edwinthomas@g.com"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="at least 8 characters"
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                />
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 register-image">
            <img
              src="https://www.rhitrading.in/img/loginbg.png"
              classname="img-fluid"
              alt="Login Image"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

Layout.defaultProps = {
  title: "Register - StoreBuddy",
  description:
    "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords:
    "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default Register;
