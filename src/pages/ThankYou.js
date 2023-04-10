import { Link } from "react-router-dom";
import React from "react";

const thankYou = () => {
  return (
    <div className="thankSub">
      <h4 className="thankText">Thank you for your submission!</h4>
      <Link className="home-link" to="/">
        Click here to return home <span className="sr-only"></span>
      </Link>
    </div>
  );
};

export default thankYou;
