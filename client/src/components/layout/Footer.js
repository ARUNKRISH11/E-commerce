import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <span>All Rights Reserved &copy; StoreBuddy 2024 </span>
      <p className="text-center mt-3">
        <Link to={"/contact"}>Contact</Link> <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link> <Link to={"/policy"}>Privacy Policy</Link>
      </p>
    </div>
  );
}

export default Footer;
