import React from "react";
import home from "../images/home.png";
import { Link } from "react-router-dom";

const homepageIcon = () => {
  return (
    <Link to="/">
      <img className="homepageIcon" alt="homepage" src={home} />
    </Link>
  );
};

export default homepageIcon;
