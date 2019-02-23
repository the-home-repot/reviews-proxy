import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={outerWrap}>
          <div style={innerWrap}>
            <div id="photos" className="gallery" style={gallery} />
            <div className="overview" style={overview}>
              OVERVIEW
            </div>
          </div>
          <div id="similar-options" className="related" style={related} />
        </div>
        <div id="reviews" className="reviews" />
      </div>
    );
  }
}

const outerWrap = {
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
  height: "600px"
  // backgroundColor: "#cccccc",
  // border: "1px solid green",
  // color: "green"
};

const overview = {
  width: "40%",
  height: "600px",
  backgroundColor: "#cccccc",
  border: "1px solid red",
  color: "red"
};

const related = {
  height: "500px"
  // backgroundColor: "#cccccc",
  // border: "1px solid yellow",
  // color: "yellow"
};

ReactDOM.render(<App />, document.getElementById("app"));
