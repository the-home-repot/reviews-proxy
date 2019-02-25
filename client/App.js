import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const event = new CustomEvent("updateProduct", {
      detail: Math.ceil(Math.random() * 100)
    });
    setTimeout(() => window.dispatchEvent(event), 100);
    console.log(event);
  }

  render() {
    return (
      <div style={appStyle}>
        <Header />
        <div style={outerWrap}>
          <div style={innerWrap}>
            <div id="photos" className="gallery" style={gallery} />
            <div id="product-overview" className="overview" style={overview} />
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
};

const overview = {
  width: "40%",
  height: "600px",
  marginRight: "8px"
};

const related = {
  height: "500px"
};

ReactDOM.render(<App />, document.getElementById("app"));
