import React from "react";

const Footer = () => {
  return (
    <footer className="pb-10">
      <p>
        All Rights reserved by <span className="font-semibold"> Layomi</span>
      </p>
      <p cla>Copyright&copy;{new Date().getFullYear()}. </p>
    </footer>
  );
};

export default Footer;
