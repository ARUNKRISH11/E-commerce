import React from "react";
import Layout from "../components/layout/Layout";

function About() {
  return (
    <Layout>
      <div>
        <h1 className="page-title">About Us</h1>
        <p className="page-sub-title">Welcome to Store Buddy</p>
        <p className="page-content">
          Store Buddy is an e-commerce webapp where you can find all the
          necessary shopping items. We have achieved many milestones since our
          inception, including completing over 1000 orders, having a customer
          rating of 4.5 and above, and having a user base of over 1000
          customers. We are committed to providing the best experience to our
          customers and are constantly working to improve our services.
        </p>
        <p className="page-content">
          Our customers have given us a rating of 4.5 and above and have
          provided positive feedback about our services. We are grateful for
          their support and are committed to continuing to provide the best
          experience to them.
        </p>
        <p className="page-content">
          If you want to download our webapp from the play store or apple store,
          you can click on the following links:
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.storebuddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              width="200"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/store-buddy/id1445391413"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Get it on App Store"
              width="200"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}

Layout.defaultProps = {
  title: "About Us - StoreBuddy",
  description: "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords: "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default About;
