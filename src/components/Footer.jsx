import React from "react";

var currDate = new Date();
var currYear = currDate.getFullYear();

function Footer() {
  return <p className="footer">copyright {currYear}</p>;
}

export default Footer;
