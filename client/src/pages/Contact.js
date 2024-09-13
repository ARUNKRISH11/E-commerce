import React from "react";
import Layout from "../components/layout/Layout";

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
                  <i className="fa fa-phone"></i> +91 12345 67890
                </p>
                <p>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto:care@storebuddy.com">care@storebuddy.com</a>
                </p>
                <p>
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

export default Contact;
