import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  console.log(location.pathname);

  console.log(location.state.isLoggedin);
  return (
    <div className="border border-primary border-3 p-3">
      <h2>Contact</h2>
    </div>
  );
};

export default Contact;
