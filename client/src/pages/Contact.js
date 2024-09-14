import React from "react";
import Layout from "../components/layout/Layout";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

function Contact() {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <div className="container">
          <div className="contact">
            <div className="row">
              <div className="col-md-6">
                <p className="page-sub-title">Customer Care</p>
                <p>
                  <IoCallOutline />
                  <i className="fa fa-phone"></i> +91 12345 67890
                </p>
                <p>
                  <i className="fa fa-envelope"></i> <IoMailOutline />
                  <a href="mailto:care@storebuddy.com"> care@storebuddy.com</a>
                </p>
                <p>
                  <IoLocationOutline />
                  <i className="fa fa-map-marker"></i> StoreBuddy Pvt. Ltd.
                  <br />
                  123, Some Street, Some City, Some State, Pincode - 123456
                </p>
              </div>
              <div className="col-md-6">
                <p className="page-sub-title">Leave a Note</p>
                <form>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Layout.defaultProps = {
  title: "Contact Us - StoreBuddy",
  description: "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords: "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default Contact;
