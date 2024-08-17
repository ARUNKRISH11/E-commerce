import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
