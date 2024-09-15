import React from "react";
import Layout from "../../components/layout/Layout";

function Login() {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title"> Login</h1>
        <div className="row">
          <div className="col-md-6 ">
            <form className="page-content form">
              <p classNme="page-title"></p>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Edwin Thomas"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email or Phone</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="edwinthomas@g.com or Enter phone number"
                  id="email"
                />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
          <div className="col-md-6 row-image">
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
  title: "Login - StoreBuddy",
  description:
    "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords:
    "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default Login;
