import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  // Form functions

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password, phone, address)
  }

  return (
    <Layout>
      <div className="container">
        <h1 className="page-title"> Register</h1>
        <div className="row">
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit} className="page-content">
              <p classNme="page-title"></p>
              <div className="form-group">
                <label for="name" className="required">Name </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Edwin Thomas"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email" className="required">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="edwinthomas@g.com"
                  required
                />
              </div>
              <div className="form-group">
                <label for="password" className="required">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="at least 8 characters"
                  required
                />
              </div>
              <div className="form-group">
                <label for="phone" className="required">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label for="address"  className="required">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <p className="required"> This field is required</p>
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
