import React from "react";
import Layout from "../components/layout/Layout";

function Cart() {
  return (
    <Layout>
      <div>Cart</div>
    </Layout>
  );
}

Layout.defaultProps = {
  title: "Cart - StoreBuddy",
  description: "StoreBuddy is an online shopping cart where you can find all the necessary shopping items.",
  keywords: "online shopping cart, storebuddy, shopping store, online store, e-commerce, online shopping, store buddy, storebuddy online, online storebuddy, storebuddy shopping, online storebuddy shopping, storebuddy online shopping",
  author: "StoreBuddy",
};

export default Cart;
