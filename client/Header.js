import React from "react";

const Header = props => (
  <div style={header}>
    <div style={logoBox}>
      <img src="./lib/the-home-repot.png" style={logo} />
    </div>
    <h1 style={title}>The Home Repot</h1>
  </div>
);

const header = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "125px",
  width: "100%",
  backgroundColor: "white",
  borderBottom: "3px solid #f96302",
  opacity: "1"
};

const logoBox = {};

const title = {
  fontSize: "32px",
  color: "#f96302",
  fontFamily:
    "helvetica-neue-light, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: "400",
  marginLeft: "5px"
};

const logo = {
  width: "65px",
  height: "65px",
  borderRadius: "1px"
};

export default Header;
