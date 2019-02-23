import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div style={appStyle}>
        <Header />
        <div style={outerWrap}>
          <div style={innerWrap}>
            <div id="photos" className="gallery" style={gallery} />
            <div id="product-overview" className="overview" style={overview}>
              OVERVIEW
            </div>
          </div>
          <div id="similar-options" className="related" style={related} />
        </div>
        <div id="reviews" className="reviews" />
        <Footer />
      </div>
    );
  }
}

const appStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};
const outerWrap = {
  marginTop: "125px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "1150px"
};

const innerWrap = {
  display: "flex",
  justifyContent: "space-between"
};

const gallery = {
  maxWidth: "60%",
  height: "600px",
  marginLeft: "8px"
  // backgroundColor: "#cccccc",
  // border: "1px solid green",
  // color: "green"
};

const overview = {
  width: "40%",
  height: "600px",
  marginRight: "8px"
  // backgroundColor: "#cccccc",
  // border: "1px solid red",
  // color: "red"
};

const related = {
  height: "500px"
  // backgroundColor: "#cccccc",
  // border: "1px solid yellow",
  // color: "yellow"
};

ReactDOM.render(<App />, document.getElementById("app"));
