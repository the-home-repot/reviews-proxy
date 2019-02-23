import React from "react";

const Header = props => (
  <div style={header}>
    <img src="./lib/the-home-repot.png" style={logo} />
    <h1 style={title}>The Home Repot</h1>
  </div>
);

const header = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "98.8%",
  marginTop: "-10px",
  backgroundColor: "white",
  border: "1px solid #f96302",
  borderTop: "none",
  borderRadius: "5px"
};

const title = {
  fontSize: "32px",
  color: "#f96302",
  fontFamily:
    "helvetica-neue-light, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: "400",
  marginLeft: "5px"
};

const logo = {
  width: "45px",
  height: "45px",
  borderRadius: "1px"
};

export default Header;