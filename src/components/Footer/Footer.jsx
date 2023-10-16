import React from "react";

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#111",
  padding: "10px 50px" /* Adjust based on your design preference */,
};

const spanStyle = {
  flex: 1,
  textAlign: "center",
  fontSize: "10px",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <span style={spanStyle}>Our Website</span>
      <span>|</span>
      <span style={spanStyle}>License</span>
      <span>|</span>
      <span style={spanStyle}>Join Discord</span>
    </footer>
  );
};

export default Footer;
