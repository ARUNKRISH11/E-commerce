import React from "react";
import Layout from "../../components/layout/Layout";

function Login() {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title"> Login</h1>
        <div className="row">
          <div className="col-md-6 ">
            <form className="page-content login-form">
              <p classNme="page-title"></p>
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
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
          <div className="col-md-6 login-image">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1726652236~exp=1726652836~hmac=9c36a5ec7b29e96a787451b2d008e59309b5fe1681ab41a20e5b087e8b1e102c"
              classname="img-fluid"
              alt="Login Image"
              width={700}
              height={660}
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
