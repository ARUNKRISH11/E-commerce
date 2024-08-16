import React from "react";
import Header from "./header";
import Footer from "./footer";

function layout({children}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
